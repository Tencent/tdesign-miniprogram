import { prefix } from '../common/config';


export default function transition() {
  return {
    data() {
      return {
        transitionClass: '',
        transitionDurations: 300,
        className: '',
        realVisible: false,
      };
    },
    props: {
      visible: {
        type: Boolean,
        default: null,
      },
      appear: Boolean,
      name: {
        type: String,
        default: 'fade',
      },
      durations: {
        type: Number,
        optionalTypes: [Array],
      },
    },
    watch: {
      visible: {
        handler(val, oldVal) {
          this.watchVisible(val, oldVal);
        },
      },
    },
    created() {
      this.status = '';
      this.transitionT = 0;
    },
    beforeMount() {
      this.dataDurations = this.getDurations();
      if (this.visible) {
        this.enter();
      }
      this.inited = true;
    },
    destroyed() {
      clearTimeout(this.transitionT);
    },
    methods: {
      watchVisible(curr, prev) {
        if (this.inited && curr !== prev) {
          curr ? this.enter() : this.leave();
        }
      },
      getDurations() {
        const { durations } = this;
        if (Array.isArray(durations)) {
          return durations.map(item => Number(item));
        }
        return [Number(durations), Number(durations)];
      },
      enter() {
        const { name, transitionDurations } = this;
        const [duration] = this.dataDurations;
        this.status = 'entering';
        this.realVisible = true;
        this.transitionClass = `${prefix}-${name}-enter ${prefix}-${name}-enter-active`;


        setTimeout(() => {
          this.transitionClass = `${prefix}-${name}-enter-active ${prefix}-${name}-enter-to`;
        }, 30);
        if (typeof duration === 'number' && duration > 0) {
          this.transitionT = setTimeout(this.entered.bind(this), duration + 30);
        } else {
          this.transitionT = setTimeout(
            this.status === 'leaving' ? this.leaved.bind(this) : (() => {}),
            transitionDurations + 30,
          );
        }
      },
      entered() {
        this.customDuration = false;
        clearTimeout(this.transitionT);
        this.status = 'entered';
        this.transitionClass = '';
      },
      leave() {
        const { name, transitionDurations } = this;
        const [, duration] = this.dataDurations;
        this.status = 'leaving';
        this.transitionClass = `${prefix}-${name}-leave  ${prefix}-${name}-leave-active`;

        clearTimeout(this.transitionT);
        setTimeout(() => {
          this.transitionClass = `${prefix}-${name}-leave-active ${prefix}-${name}-leave-to`;
        }, 30);

        if (typeof duration === 'number' && duration > 0) {
          this.customDuration = true;
          this.transitionT = setTimeout(this.leaved.bind(this), duration + 30);
        } else {
          this.transitionT = setTimeout(
            this.status === 'leaving' ? this.leaved.bind(this) : (() => {}),
            transitionDurations + 30,
          );
        }
      },
      leaved() {
        this.customDuration = false;
        this.$emit('leaved');
        clearTimeout(this.transitionT);
        this.status = 'leaved';

        this.transitionClass = '';
        this.realVisible = false;
      },
      onTransitionEnd() {
        if (this.customDuration) {
          return;
        }
        clearTimeout(this.transitionT);
        if (this.status === 'entering' && this.visible) {
          this.entered();
        } else if (this.status === 'leaving' && !this.visible) {
          this.leaved();
        }
      },
    },
  };
}
export const transitionMixins = transition();
