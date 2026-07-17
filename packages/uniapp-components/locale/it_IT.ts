/* eslint-disable no-template-curly-in-string */
// 文件有效，为国际化做准备
import '../npm/dayjs/esm/locale/it';

export default {
  actionSheet: {
    cancel: 'Annulla',
  },
  calendar: {
    confirm: 'Conferma',
    title: 'Seleziona Data',
    weekdays: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
    monthTitle: '{month} {year}',
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
    filterPlaceholder: 'Cerca',
    empty: 'Nessun risultato',
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
    format: 'DD-MM-YYYY HH:mm:ss',
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
    texts: ['Pessimo', 'Scarso', 'Normale', 'Buono', 'Eccellente'],
    valueText: '{value} punteggio',
    noValueText: 'Nessun punteggio',
  },
  tabBar: {
    newsAriaLabel: 'Ci sono nuove notizie',
    moreNewsAriaLabel: 'Ci sono molte notizie',
    haveMoreNewsAriaLabel: 'Ci sono {value}+ notizie',
    haveNewsAriaLabel: 'Ci sono {value} notizie',
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
      reloadText: 'Ricarica',
    },
  },
  guide: {
    next: 'Successivo',
    skip: 'Salta',
    finish: 'Finisci',
    back: 'Indietro',
  },
  typography: {
    expandText: 'Espandere',
    collapseText: 'ripiegare',
    copiedText: 'Copia completata',
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
    actionBar: {
      replay: 'Aggiorna',
      copy: 'Copia',
      good: 'Mi piace',
      bad: 'Non mi piace',
      share: 'Condividi',
      quote: 'Cita',
    },
  },
  chatRecord: {
    holdToTalk: 'Tieni premuto per parlare',
    requestAuth: 'Autorizza il permesso del microfono',
    releaseToCancel: 'Rilascia per annullare',
    releaseToSend: 'Rilascia per inviare, scorri su per annullare',
    cancelText: 'Annulla',
    sendText: 'Invia',
    busyTip: 'Riconoscimento in corso, attendere…',
    recognizeFailTip: 'Riconoscimento vocale non riuscito, riprova',
    missingPluginTip: 'Plugin di riconoscimento vocale WechatSI mancante',
    authSettingFail: 'Impossibile ottenere le impostazioni del permesso di registrazione',
    openSettingFail: 'Impossibile aprire le impostazioni',
    systemMicTitle: 'Impossibile usare il microfono',
    systemMicContent:
      'È stato rilevato che il sistema del telefono ha disabilitato il permesso del microfono per "WeChat".\n\n' +
      'Abilitalo nelle impostazioni di sistema:\n' +
      '- iOS: Impostazioni > WeChat > Microfono\n' +
      '- Android: Impostazioni > Gestione app > WeChat > Autorizzazioni > Microfono\n\n' +
      'Dopo averlo abilitato, torna al Mini Program e riprova.',
  },
  chatSender: {
    placeholder: 'Inserisci il messaggio...',
    sendText: 'Invia',
    stopText: 'Ferma',
  },
  chatThinking: {
    status: {
      pending: 'Pensando...',
      complete: 'Pensiero completato',
      stop: 'Pensiero interrotto',
    },
  },
};
