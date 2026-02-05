/* eslint-disable no-template-curly-in-string */
// 文件有效，为国际化做准备
import 'dayjs/locale/ko';

export default {
  actionSheet: {
    cancel: '취소',
  },
  calendar: {
    confirm: '확인',
    title: '날짜 선택',
    weekdays: ['일', '월', '화', '수', '목', '금', '토'],
    monthTitle: '{month} {year}',
    months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  },
  cascader: {
    title: '제목',
    placeholder: '옵션 선택',
  },
  dropdownMenu: {
    reset: '초기화',
    confirm: '확인',
  },
  dateTimePicker: {
    dayjsLocale: 'ko',
    title: '날짜 선택',
    cancel: '취소',
    confirm: '확인',
    format: 'YYYY-MM-DD',
    months: ['1 월', '2 월', '3 월', '4 월', '5 월', '6 월', '7 월', '8 월', '9 월', '10 월', '11 월', '12 월'],
    yearLabel: '년',
    monthLabel: '월',
    dateLabel: '일',
    hourLabel: '시',
    minuteLabel: '분',
    secondLabel: '초',
  },
  form: {
    errorMessage: {
      date: '정확한 내용을 입력해주세요${name}',
      url: '정확한 내용을 입력해주세요${name}',
      required: '${name}필수의',
      whitespace: '${name}은 비어 있을 수 없습니다',
      max: '${name}문자 길이는 초과할 수 없습니다 ${validate} 캐릭터，한자는 두 글자와 같다',
      min: '${name}문자 길이는 다음보다 작을 수 없습니다 ${validate} 캐릭터，한자는 두 글자와 같다',
      len: '${name}문자 길이는 다음과 같아야 합니다. ${validate}',
      enum: '${name}만 될 수 있습니다${validate}그리고 더',
      idcard: '정확한 내용을 입력해주세요${name}',
      telnumber: '정확한 내용을 입력해주세요${name}',
      pattern: '정확한 내용을 입력해주세요${name}',
      validator: '${name}비준수',
      boolean: '${name}데이터 유형은 부울이어야 합니다',
      number: '${name}숫자여야 합니다',
    },
    colonText: ':',
  },
  picker: {
    cancel: '취소',
    confirm: '확인',
  },
  pullDownRefresh: {
    loadingTexts: ['새로고침을 당겨주세요', '느슨하게 하여 새로 고침', '새로고침 중...', '새로고침 완료'],
  },
  rate: {
    texts: ['매우 나쁨', '실망', '보통', '만족', '매우 만족'],
    valueText: '{value}점',
    noValueText: '점수 없음',
  },
  tabBar: {
    newsAriaLabel: '새 뉴스가 있습니다',
    moreNewsAriaLabel: '많은 뉴스가 있습니다',
    haveMoreNewsAriaLabel: '{value}+건의 뉴스가 있습니다',
    haveNewsAriaLabel: '{value}건의 뉴스가 있습니다',
  },
  table: {
    empty: '빈 데이터',
  },
  list: {
    loading: '로딩 중...',
    loadingMoreText: '더 많은 것을 보시려면 클릭하세요',
    pulling: '새로고침을 당겨주세요...',
    loosing: '느슨하게 하여 새로 고침...',
    success: '새로고침 성공',
  },
  upload: {
    progress: {
      uploadingText: '업로드 중...',
      waitingText: '대기 중',
      failText: '실패했습니다',
      successText: '성공했습니다',
    },
  },
  guide: {
    next: '다음',
    skip: '건너뛰기',
    finish: '완료',
    back: '뒤로',
  },
  qrcode: {
    expiredText: '만료됨',
    refreshText: '새로 고치다',
    scannedText: '스캔됨',
  },
  attachments: {
    status: {
      pending: '업로드 중...',
      fail: '업로드 실패',
    },
  },
  chatActionbar: {
    actionTexts: {
      replay: '새로고침',
      copy: '복사',
      good: '좋아요',
      bad: '싫어요',
      share: '공유',
      quote: '인용',
    },
  },
  chatSender: {
    placeholder: '메시지를 입력하세요...',
    sendTexts: ['보내기', '중지'],
  },
  chatThinking: {
    status: {
      pending: '생각 중...',
      complete: '생각 완료',
      stop: '생각 중지',
    },
  },
};
