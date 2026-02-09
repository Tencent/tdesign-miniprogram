/* eslint-disable no-template-curly-in-string */
import 'dayjs/locale/ru';

export default {
  actionSheet: {
    cancel: 'Отмена',
  },
  calendar: {
    confirm: 'Подтвердить',
    title: 'Выберите дату',
    weekdays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    monthTitle: '{month} {year}',
    months: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
  },
  cascader: {
    title: 'Название',
    placeholder: 'Выберите опцию',
  },
  dropdownMenu: {
    reset: 'Сброс',
    confirm: 'Подтвердить',
  },
  dateTimePicker: {
    dayjsLocale: 'ru',
    title: 'Выберите время',
    cancel: 'Отмена',
    confirm: 'Подтвердить',
    format: 'DD.MM.YYYY',
    months: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
    yearLabel: 'Год',
    monthLabel: 'Месяц',
    dateLabel: 'День',
    hourLabel: 'Час',
    minuteLabel: 'Минута',
    secondLabel: 'Секунда',
  },
  form: {
    errorMessage: {
      date: 'Введите правильный ${name}',
      url: 'Введите правильный ${name}',
      whitespace: '${name} не может быть пустым',
      required: '${name} обязательно для заполнения',
      max: 'Длина символов ${name} не должна превышать ${validate} символов',
      min: 'Длина символов ${name} не должна быть меньше ${validate} символов',
      len: 'Длина символов ${name} должна быть ${validate}',
      enum: '${name} может быть только ${validate} и т.д.',
      idcard: 'Введите правильный ${name}',
      telnumber: 'Введите правильный ${name}',
      pattern: 'Введите правильный ${name}',
      validator: '${name} не соответствует требованиям',
      boolean: 'Тип данных ${name} должен быть булевым',
      number: '${name} должно быть числом',
    },
    colonText: ':',
  },
  picker: {
    cancel: 'Отмена',
    confirm: 'Подтвердить',
  },
  pullDownRefresh: {
    loadingTexts: ['Потяните вниз для обновления', 'Отпустите для обновления', 'Обновление...', 'Обновление завершено'],
  },
  rate: {
    texts: ['Ужасно', 'Разочарован', 'Обычно', 'Удовлетворительно', 'Отлично'],
    valueText: '{value} баллов',
    noValueText: 'Без оценки',
  },
  tabBar: {
    newsAriaLabel: 'Есть новые сообщения',
    moreNewsAriaLabel: 'Есть много новых сообщений',
    haveMoreNewsAriaLabel: 'Есть {value}+ сообщений',
    haveNewsAriaLabel: 'Есть {value} сообщений',
  },
  table: {
    empty: 'Нет данных',
  },
  list: {
    loading: 'Загрузка...',
    loadingMoreText: 'Нажмите, чтобы загрузить больше',
    pulling: 'Потяните, чтобы обновить...',
    loosing: 'Отпустите, чтобы обновить...',
    success: 'Успешно обновлено',
  },
  upload: {
    progress: {
      uploadingText: 'Загрузка...',
      waitingText: 'Ожидание загрузки',
      failText: 'Ошибка загрузки',
      successText: 'Загрузка завершена',
    },
  },
  guide: {
    next: 'Далее',
    skip: 'Пропустить',
    finish: 'Готово',
    back: 'Назад',
  },
  qrcode: {
    expiredText: 'истекший',
    refreshText: 'обновить',
    scannedText: 'сканированный',
  },
  attachments: {
    status: {
      pending: 'Загрузка...',
      fail: 'Ошибка загрузки',
    },
  },
  chatActionbar: {
    actionTexts: {
      replay: 'Обновить',
      copy: 'Копировать',
      good: 'Нравится',
      bad: 'Не нравится',
      share: 'Поделиться',
      quote: 'Цитировать',
    },
  },
  chatSender: {
    placeholder: 'Введите сообщение...',
    sendTexts: ['Отправить', 'Остановить'],
  },
  chatThinking: {
    status: {
      pending: 'Думаю...',
      complete: 'Завершил размышления',
      stop: 'Размышления остановлены',
    },
  },
};
