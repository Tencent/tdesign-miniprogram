/* eslint-disable no-template-curly-in-string */
// 文件有效，为国际化做准备
import 'dayjs/locale/ar';

export default {
  actionSheet: {
    cancel: 'الإلغاء',
  },
  calendar: {
    confirm: 'أكد',
    title: 'انتقِ التاريخ',
    weekdays: ['يوم الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    monthTitle: '{شهر واحد} {سنة واحدة}',
    months: [
      'يناير',
      'فبراير',
      'مارس',
      'أبريل',
      'مايو',
      'يونيو',
      'يوليو',
      'أغسطس',
      'سبتمبر',
      'أكتوبر',
      'نوفمبر',
      'ديسمبر',
    ],
  },
  cascader: {
    title: 'العنوان',
    placeholder: 'اختر الخيارات',
  },
  dropdownMenu: {
    reset: 'إعادة الضبط',
    confirm: 'أكد',
  },
  dateTimePicker: {
    dayjsLocale: 'ar',
    title: 'انتقِ التاريخ',
    cancel: 'الإلغاء',
    confirm: 'أكد',
    format: 'DD-MM-YYYY',
    months: [
      'يناير',
      'فبراير',
      'مارس',
      'أبريل',
      'مايو',
      'يونيو',
      'يوليو',
      'أغسطس',
      'سبتمبر',
      'أكتوبر',
      'نوفمبر',
      'ديسمبر',
    ],
    yearLabel: 'سنة',
    monthLabel: 'الشهر',
    dateLabel: 'التاريخ',
    hourLabel: 'الساعة',
    minuteLabel: 'دقيقة',
    secondLabel: 'ثانيا',
  },
  form: {
    errorMessage: {
      date: 'الرجاء إدخال ${name} الصحيح',
      url: 'الرجاء إدخال ${name} الصحيح',
      whitespace: 'لا يمكن أن يكون ${name} فارغًا',
      required: 'مطلوب ${name}',
      max: 'يمكن أن يحتوي ${name} على ما يصل إلى ${validate} حرفًا',
      min: 'لا يمكن أن يكون ${name} أقل من ${validate} حرفًا',
      len: 'يجب أن يتكون ${name} من أحرف ${validate} بالضبط',
      enum: '${name} يجب أن يكون واحدًا من ${validate} ',
      idcard: 'الرجاء إدخال ${name} الصحيح',
      telnumber: 'الرجاء إدخال ${name} الصحيح',
      pattern: 'الرجاء إدخال ${name} الصحيح',
      validator: '${name} غير صالح',
      boolean: '${name} ليس منطقيًا',
      number: 'يجب أن يكون ${name} رقمًا',
    },
  },
  picker: {
    cancel: 'الإلغاء',
    confirm: 'أكد',
  },
  pullDownRefresh: {
    loadingTexts: ['اسحب للتحديث', 'مرتخية للتجديد', 'منعش', 'اكتمل التحديث'],
  },
  rate: {
    texts: ['سيء جداً', 'مخيب للآمال', 'عادي', 'مرضي', 'ممتاز'],
    valueText: '{القيمة} نتيجة',
    noValueText: 'لا توجد نقاط',
  },
  tabBar: {
    newsAriaLabel: 'هناك أخبار جديدة',
    moreNewsAriaLabel: 'هناك الكثير من الأخبار السيئة',
    haveMoreNewsAriaLabel: 'هناك { قيمة }+ أخبار',
    haveNewsAriaLabel: 'هناك { قيمة } أخبار',
  },
  table: {
    empty: 'البيانات الفارغة',
  },
  list: {
    loading: 'التحميل...',
    loadingMoreText: 'انقر لتحميل المزيد',
    pulling: 'اسحب للتحديث...',
    loosing: 'مرتخية للتجديد...',
    success: 'تم التحديث بنجاح',
  },
  upload: {
    progress: {
      uploadingText: 'جارٍ التحميل...',
      waitingText: 'الانتظار',
      failText: 'فشل',
      successText: 'النجاح',
    },
  },
  guide: {
    next: 'التالي',
    skip: 'تخطي',
    finish: 'أنهي',
    back: 'العودة',
  },
  qrcode: {
    expiredText: 'منتهي الصلاحية',
    refreshText: 'ينعش',
    scannedText: 'تم مسحها ضوئيًا',
  },
  attachments: {
    status: {
      pending: 'جارٍ التحميل...',
      fail: 'فشل التحميل',
    },
  },
  chatActionbar: {
    actionTexts: {
      replay: 'تحديث',
      copy: 'نسخ',
      good: 'إعجاب',
      bad: 'عدم إعجاب',
      share: 'مشاركة',
      quote: 'اقتباس',
    },
  },
  chatSender: {
    placeholder: 'الرجاء إدخال الرسالة...',
    sendTexts: ['إرسال', 'إيقاف'],
  },
  chatThinking: {
    status: {
      pending: 'جاري التفكير...',
      complete: 'تم الانتهاء من التفكير',
      stop: 'تم إيقاف التفكير',
    },
  },
};
