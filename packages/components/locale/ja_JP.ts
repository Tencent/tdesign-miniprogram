/* eslint-disable no-template-curly-in-string */
// 文件有效，为国际化做准备
import 'dayjs/locale/ja';

export default {
  actionSheet: {
    cancel: 'キャンセル',
  },
  calendar: {
    confirm: '確認',
    title: '日付の選択',
    weekdays: ['日', '月', '火', '水', '木', '金', '土'],
    monthTitle: '{month} {year}',
    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  },
  cascader: {
    title: 'タイトル',
    placeholder: 'オプションを選択',
  },
  dropdownMenu: {
    reset: 'リセット',
    confirm: '確認',
  },
  dateTimePicker: {
    dayjsLocale: 'ja',
    title: '日付を選択',
    cancel: 'キャンセル',
    confirm: '確認',
    format: 'YYYY-MM-DD',
    months: ['1 月', '2 月', '3 月', '4 月', '5 月', '6 月', '7 月', '8 月', '9 月', '10 月', '11 月', '12 月'],
    yearLabel: '年',
    monthLabel: '月',
    dateLabel: '日',
    hourLabel: '時',
    minuteLabel: '分',
    secondLabel: '秒',
  },
  form: {
    errorMessage: {
      date: '正しく入力してください${name}',
      url: '正しく入力してください${name}',
      required: '${name}必須項目',
      whitespace: '${name}を空にすることはできません',
      max: '${name}文字数制限 ${validate} 文字，一中二文',
      min: '${name}を下回る文字数は使用できません ${validate} 文字，一中二文',
      len: '${name}文字の長さは、必ず ${validate}',
      enum: '${name}でしかありえません${validate}等',
      idcard: '正しく入力してください${name}',
      telnumber: '正しく入力してください${name}',
      pattern: '正しく入力してください${name}',
      validator: '${name}要件を満たしていない',
      boolean: '${name}データ型は Boolean 型であること',
      number: '${name}デジタルであること',
    },
    colonText: ':',
  },
  picker: {
    cancel: 'キャンセル',
    confirm: '確認',
  },
  pullDownRefresh: {
    loadingTexts: ['更新に引っ張ってください', '緩めて更新中', '更新中…', '更新が完了しました'],
  },
  rate: {
    texts: ['最悪', '不満', '普通', '満足', '素晴らしい'],
    valueText: '{value} 点',
    noValueText: 'スコアなし',
  },
  tabBar: {
    newsAriaLabel: '新しいニュースがあります',
    moreNewsAriaLabel: 'たくさんのニュースがあります',
    haveMoreNewsAriaLabel: '{value}+ 件のニュースがあります',
    haveNewsAriaLabel: '{value} 件のニュースがあります',
  },
  table: {
    empty: 'データがありません',
  },
  list: {
    loading: '読み込み中…',
    loadingMoreText: 'もっと見るにはクリックしてください',
    pulling: '更新に引っ張ってください…',
    loosing: '緩めて更新中…',
    success: '更新が成功しました',
  },
  upload: {
    progress: {
      uploadingText: 'アップロード中…',
      waitingText: '待機中',
      failText: '失敗しました',
      successText: '成功しました',
    },
  },
  guide: {
    next: '次へ',
    skip: 'スキップ',
    finish: '完了',
    back: '戻る',
  },
  qrcode: {
    expiredText: '期限切れ',
    refreshText: 'リフレッシュ',
    scannedText: 'スキャンされた',
  },
  attachments: {
    status: {
      pending: 'アップロード中...',
      fail: 'アップロード失敗',
    },
  },
  chatActionbar: {
    actionTexts: {
      replay: '更新',
      copy: 'コピー',
      good: 'いいね',
      bad: '低評価',
      share: '共有',
      quote: '引用',
    },
  },
  chatSender: {
    placeholder: 'メッセージを入力してください...',
    sendTexts: ['送信', '停止'],
  },
  chatThinking: {
    status: {
      pending: '思考中...',
      complete: '思考完了',
      stop: '思考を停止',
    },
  },
};
