/* eslint-disable no-template-curly-in-string */
// 文件有效，为国际化做准备
import 'dayjs/locale/it';

export default {
  actionSheet: {
    cancel: 'Annulla',
  },
  calendar: {
    confirm: 'Conferma',
    title: 'Seleziona Data',
    weekdays: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
    monthTitle: '{mese} {anno}',
    months: [
      'Gennaio',
      'Febbraio',
      'Marzo',
      'Aprile',
      'Maggio',
      'Giugno',
      'Luglio',
      'Agosto',
      'Settembre',
      'Ottobre',
      'Novembre',
      'Dicembre',
    ],
  },
  cascader: {
    title: 'Titolo',
    placeholder: 'Seleziona opzioni',
  },
  dropdownMenu: {
    reset: 'Reimposta',
    confirm: 'Conferma',
  },
  dateTimePicker: {
    dayjsLocale: 'it',
    title: 'Seleziona Data',
    cancel: 'Annulla',
    confirm: 'Conferma',
    format: 'DD-MM-YYYY',
    months: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
    yearLabel: 'Anno',
    monthLabel: 'Mese',
    dateLabel: 'Data',
    hourLabel: 'Ora',
    minuteLabel: 'Minuto',
    secondLabel: 'Secondo',
  },
  form: {
    errorMessage: {
      date: 'Inserisci la ${name} corretta',
      url: 'Inserisci la ${name} corretta',
      whitespace: 'Il ${name} non può essere vuoto',
      required: '${name} obbligatorio',
      max: 'La lunghezza dei caratteri di ${name} non può superare i ${validate} caratteri',
      min: 'La lunghezza dei caratteri di ${name} non può essere inferiore a ${validate} caratteri',
      len: 'La lunghezza dei caratteri di ${name} deve essere ${validate}',
      enum: '${name} può essere solo ${validate}, ecc.',
      idcard: 'Inserisci la ${name} corretta',
      telnumber: 'Inserisci la ${name} corretta',
      pattern: 'Inserisci la ${name} corretta',
      validator: '${name} non conforme ai requisiti',
      boolean: 'Il tipo di dati di ${name} deve essere booleano',
      number: '${name} deve essere un numero',
    },
    colonText: ':',
  },
  picker: {
    cancel: 'Annulla',
    confirm: 'Conferma',
  },
  pullDownRefresh: {
    loadingTexts: ['Tirare per aggiornare', 'Libera da aggiornare', 'Rinfrescante', 'Aggiornamento completato'],
  },
  rate: {
    texts: ['Pessimo', 'Deluso', 'Normale', 'Soddisfatto', 'Ottimo'],
    valueText: '{valore} punteggio',
    noValueText: 'Nessun punteggio',
  },
  tabBar: {
    newsAriaLabel: 'Ci sono nuove notizie',
    moreNewsAriaLabel: 'Ci sono molte notizie',
    haveMoreNewsAriaLabel: 'Ci sono {valore}+ notizie',
    haveNewsAriaLabel: 'Ci sono {valore} notizie',
  },
  table: {
    empty: 'Dati Vuoti',
  },
  list: {
    loading: 'Caricamento...',
    loadingMoreText: 'Fai clic per caricare di più',
    pulling: 'Estrai per aggiornare...',
    loosing: 'Libera da aggiornare...',
    success: 'Aggiorna riuscito',
  },
  upload: {
    progress: {
      uploadingText: 'Invio...',
      waitingText: 'Attesa',
      failText: 'Fallito',
      successText: 'Successo',
    },
  },
  guide: {
    next: 'Successivo',
    skip: 'Salta',
    finish: 'Finisci',
    back: 'Indietro',
  },
  qrcode: {
    expiredText: 'scaduto',
    refreshText: 'aggiornare',
    scannedText: 'scansionato',
  },
  attachments: {
    status: {
      pending: 'Caricamento...',
      fail: 'Caricamento non riuscito',
    },
  },
  chatActionbar: {
    actionTexts: {
      replay: 'Aggiorna',
      copy: 'Copia',
      good: 'Mi piace',
      bad: 'Non mi piace',
      share: 'Condividi',
      quote: 'Cita',
    },
  },
  chatSender: {
    placeholder: 'Inserisci il messaggio...',
    sendTexts: ['Invia', 'Ferma'],
  },
  chatThinking: {
    status: {
      pending: 'Pensando...',
      complete: 'Pensiero completato',
      stop: 'Pensiero interrotto',
    },
  },
};
