/* eslint-disable no-template-curly-in-string */
// 文件有效，为国际化做准备
import '../npm/dayjs/esm/locale/ar';

export default {
  actionSheet: {
    cancel: 'الإلغاء',
  },
  calendar: {
    confirm: 'أكد',
    title: 'انتقِ التاريخ',
    weekdays: ['يوم الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    monthTitle: '{month} {year}',
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
    filterPlaceholder: 'بحث',
    empty: 'لا توجد عناصر مطابقة',
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
    format: 'DD-MM-YYYY HH:mm:ss',
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
    colonText: ':',
  },
  picker: {
    cancel: 'الإلغاء',
    confirm: 'أكد',
  },
  pullDownRefresh: {
    loadingTexts: ['اسحب للتحديث', 'مرتخية للتجديد', 'منعش', 'اكتمل التحديث'],
  },
  rate: {
    texts: ['سيء', 'مخيب', 'عادي', 'جيد', 'ممتاز'],
    valueText: '{value} نقطة',
    noValueText: 'لا توجد نقاط',
  },
  tabBar: {
    newsAriaLabel: 'هناك أخبار جديدة',
    moreNewsAriaLabel: 'هناك الكثير من الأخبار',
    haveMoreNewsAriaLabel: 'هناك {value}+ أخبار',
    haveNewsAriaLabel: 'هناك {value} أخبار',
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
      reloadText: 'إعادة الرفع',
    },
  },
  guide: {
    next: 'التالي',
    skip: 'تخطي',
    finish: 'أنهي',
    back: 'العودة',
  },
  typography: {
    expandText: 'توسيع',
    collapseText: 'طي',
    copiedText: 'النسخ اكتمل',
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
    actionBar: {
      replay: 'تحديث',
      copy: 'نسخ',
      good: 'إعجاب',
      bad: 'عدم إعجاب',
      share: 'مشاركة',
      quote: 'اقتباس',
    },
  },
  chatRecord: {
    holdToTalk: 'اضغط مع الاستمرار للتحدث',
    requestAuth: 'يرجى منح إذن الميكروفون',
    releaseToCancel: 'اترك للإلغاء',
    releaseToSend: 'اترك للإرسال، اسحب للأعلى للإلغاء',
    cancelText: 'إلغاء',
    sendText: 'إرسال',
    busyTip: 'جارٍ التعرّف، يرجى الانتظار…',
    recognizeFailTip: 'فشل التعرّف على التسجيل، يرجى المحاولة مرة أخرى',
    missingPluginTip: 'إضافة التعرّف على الصوت WechatSI مفقودة',
    authSettingFail: 'فشل الحصول على إعدادات إذن التسجيل',
    openSettingFail: 'فشل فتح الإعدادات',
    systemMicTitle: 'لا يمكن استخدام الميكروفون',
    systemMicContent:
      'تم اكتشاف أن نظام الهاتف قد أوقف إذن الميكروفون لتطبيق "WeChat".\n\n' +
      'يرجى تفعيله من إعدادات النظام:\n' +
      '- iOS: الإعدادات > WeChat > الميكروفون\n' +
      '- Android: الإعدادات > إدارة التطبيقات > WeChat > الأذونات > الميكروفون\n\n' +
      'بعد التفعيل، عد إلى البرنامج المصغّر وحاول مرة أخرى.',
  },
  chatSender: {
    placeholder: 'الرجاء إدخال الرسالة...',
    sendText: 'إرسال',
    stopText: 'إيقاف',
  },
  chatThinking: {
    status: {
      pending: 'جاري التفكير...',
      complete: 'تم الانتهاء من التفكير',
      stop: 'تم إيقاف التفكير',
    },
  },
};
