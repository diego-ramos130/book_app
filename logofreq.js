IncomingMessage {
  _readableState:
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: BufferList { length: 0
    },
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: null,
     ended: false,
     endEmitted: false,
     reading: false,
     sync: true,
     needReadable: false,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     emitClose: true,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: true,
     decoder: null,
     encoding: null
  },
  readable: true,
  _events: {},
  _eventsCount: 0,
  _maxListeners: undefined,
  socket:
   Socket {
     connecting: false,
     _hadError: false,
     _handle:
      TCP {
        reading: true,
        owner: [Circular
      ],
        onread: [Function: onread
      ],
        onconnection: null,
        _consumed: true
    },
     _parent: null,
     _host: null,
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { length: 0
      },
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        emitClose: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null
    },
     readable: true,
     _events: { end: [Array
      ],
        drain: [Array
      ],
        timeout: [Function: socketOnTimeout
      ],
        data: [Function: bound socketOnData
      ],
        error: [Function: socketOnError
      ],
        close: [Array
      ],
        resume: [Function: onSocketResume
      ],
        pause: [Function: onSocketPause
      ]
    },
     _eventsCount: 8,
     _maxListeners: undefined,
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite
      ],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        emitClose: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object
      ]
    },
     writable: true,
     allowHalfOpen: true,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      Server {
        _events: [Object
      ],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP
      ],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6: : : : 8080',
      [Symbol(IncomingMessage)
      ]: [Function
      ],
      [Symbol(ServerResponse)
      ]: [Function
      ],
      [Symbol(asyncId)
      ]: 10
    },
     _server:
      Server {
        _events: [Object
      ],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP
      ],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6: : : : 8080',
      [Symbol(IncomingMessage)
      ]: [Function
      ],
      [Symbol(ServerResponse)
      ]: [Function
      ],
      [Symbol(asyncId)
      ]: 10
    },
     timeout: 120000,
     parser:
      HTTPParser {
        '0': [Function: parserOnHeaders
      ],
        '1': [Function: parserOnHeadersComplete
      ],
        '2': [Function: parserOnBody
      ],
        '3': [Function: parserOnMessageComplete
      ],
        '4': [Function: bound onParserExecute
      ],
        _headers: [],
        _url: '',
        _consumed: true,
        socket: [Circular
      ],
        incoming: [Circular
      ],
        outgoing: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function: bound parserOnIncoming
      ]
    },
     on: [Function: socketOnWrap
    ],
     _paused: false,
     _httpMessage:
      ServerResponse {
        _events: [Object
      ],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Circular
      ],
        connection: [Circular
      ],
        _header: null,
        _onPendingData: [Function: bound updateOutgoingData
      ],
        _sent100: false,
        _expect_continue: false,
        req: [Circular
      ],
        locals: {},
      [Symbol(isCorked)
      ]: false,
      [Symbol(outHeadersKey)
      ]: [Object
      ]
    },
    [Symbol(asyncId)
    ]: 117,
    [Symbol(lastWriteQueueSize)
    ]: 0,
    [Symbol(timeout)
    ]:
      Timeout {
        _called: false,
        _idleTimeout: 120000,
        _idlePrev: [TimersList
      ],
        _idleNext: [TimersList
      ],
        _idleStart: 17806,
        _onTimeout: [Function: bound
      ],
        _timerArgs: undefined,
        _repeat: null,
        _destroyed: false,
      [Symbol(unrefed)
      ]: true,
      [Symbol(asyncId)
      ]: 118,
      [Symbol(triggerId)
      ]: 117
    },
    [Symbol(kBytesRead)
    ]: 0,
    [Symbol(kBytesWritten)
    ]: 0
  },
  connection:
   Socket {
     connecting: false,
     _hadError: false,
     _handle:
      TCP {
        reading: true,
        owner: [Circular
      ],
        onread: [Function: onread
      ],
        onconnection: null,
        _consumed: true
    },
     _parent: null,
     _host: null,
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { length: 0
      },
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        emitClose: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null
    },
     readable: true,
     _events: { end: [Array
      ],
        drain: [Array
      ],
        timeout: [Function: socketOnTimeout
      ],
        data: [Function: bound socketOnData
      ],
        error: [Function: socketOnError
      ],
        close: [Array
      ],
        resume: [Function: onSocketResume
      ],
        pause: [Function: onSocketPause
      ]
    },
     _eventsCount: 8,
     _maxListeners: undefined,
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite
      ],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        emitClose: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object
      ]
    },
     writable: true,
     allowHalfOpen: true,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      Server {
        _events: [Object
      ],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP
      ],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6: : : : 8080',
      [Symbol(IncomingMessage)
      ]: [Function
      ],
      [Symbol(ServerResponse)
      ]: [Function
      ],
      [Symbol(asyncId)
      ]: 10
    },
     _server:
      Server {
        _events: [Object
      ],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP
      ],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6: : : : 8080',
      [Symbol(IncomingMessage)
      ]: [Function
      ],
      [Symbol(ServerResponse)
      ]: [Function
      ],
      [Symbol(asyncId)
      ]: 10
    },
     timeout: 120000,
     parser:
      HTTPParser {
        '0': [Function: parserOnHeaders
      ],
        '1': [Function: parserOnHeadersComplete
      ],
        '2': [Function: parserOnBody
      ],
        '3': [Function: parserOnMessageComplete
      ],
        '4': [Function: bound onParserExecute
      ],
        _headers: [],
        _url: '',
        _consumed: true,
        socket: [Circular
      ],
        incoming: [Circular
      ],
        outgoing: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function: bound parserOnIncoming
      ]
    },
     on: [Function: socketOnWrap
    ],
     _paused: false,
     _httpMessage:
      ServerResponse {
        _events: [Object
      ],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Circular
      ],
        connection: [Circular
      ],
        _header: null,
        _onPendingData: [Function: bound updateOutgoingData
      ],
        _sent100: false,
        _expect_continue: false,
        req: [Circular
      ],
        locals: {},
      [Symbol(isCorked)
      ]: false,
      [Symbol(outHeadersKey)
      ]: [Object
      ]
    },
    [Symbol(asyncId)
    ]: 117,
    [Symbol(lastWriteQueueSize)
    ]: 0,
    [Symbol(timeout)
    ]:
      Timeout {
        _called: false,
        _idleTimeout: 120000,
        _idlePrev: [TimersList
      ],
        _idleNext: [TimersList
      ],
        _idleStart: 17806,
        _onTimeout: [Function: bound
      ],
        _timerArgs: undefined,
        _repeat: null,
        _destroyed: false,
      [Symbol(unrefed)
      ]: true,
      [Symbol(asyncId)
      ]: 118,
      [Symbol(triggerId)
      ]: 117
    },
    [Symbol(kBytesRead)
    ]: 0,
    [Symbol(kBytesWritten)
    ]: 0
  },
  httpVersionMajor: 1,
  httpVersionMinor: 1,
  httpVersion: '1.1',
  complete: false,
  headers: { host: 'localhost: 8080',
     connection: 'keep-alive',
     'upgrade-insecure-requests': '1',
     'user-agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3490.0 Safari/537.36',
     accept:
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,* /*;q=0.8',
     referer: 'http://localhost:8080/search',
     'accept-encoding': 'gzip, deflate, br',
     'accept-language': 'en-US,en;q=0.9',
     cookie: 'gsScrollPos-486868117=' },
  rawHeaders:
   [ 'Host',
     'localhost:8080',
     'Connection',
     'keep-alive',
     'Upgrade-Insecure-Requests',
     '1',
     'User-Agent',
     'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3490.0 Safari/537.36',
     'Accept',
     'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
     'Referer',
     'http: //localhost:8080/search',
     'Accept-Encoding',
     'gzip, deflate, br',
     'Accept-Language',
     'en-US,en;q=0.9',
     'Cookie',
     'gsScrollPos-486868117='
  ],
  trailers: {},
  rawTrailers: [],
  aborted: false,
  upgrade: false,
  url: '/search/result?searchradio=Title&author_title=lost',
  method: 'GET',
  statusCode: null,
  statusMessage: null,
  client:
   Socket {
     connecting: false,
     _hadError: false,
     _handle:
      TCP {
        reading: true,
        owner: [Circular
      ],
        onread: [Function: onread
      ],
        onconnection: null,
        _consumed: true
    },
     _parent: null,
     _host: null,
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { length: 0
      },
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        emitClose: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null
    },
     readable: true,
     _events: { end: [Array
      ],
        drain: [Array
      ],
        timeout: [Function: socketOnTimeout
      ],
        data: [Function: bound socketOnData
      ],
        error: [Function: socketOnError
      ],
        close: [Array
      ],
        resume: [Function: onSocketResume
      ],
        pause: [Function: onSocketPause
      ]
    },
     _eventsCount: 8,
     _maxListeners: undefined,
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite
      ],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        emitClose: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object
      ]
    },
     writable: true,
     allowHalfOpen: true,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      Server {
        _events: [Object
      ],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP
      ],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6: : : : 8080',
      [Symbol(IncomingMessage)
      ]: [Function
      ],
      [Symbol(ServerResponse)
      ]: [Function
      ],
      [Symbol(asyncId)
      ]: 10
    },
     _server:
      Server {
        _events: [Object
      ],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP
      ],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6: : : : 8080',
      [Symbol(IncomingMessage)
      ]: [Function
      ],
      [Symbol(ServerResponse)
      ]: [Function
      ],
      [Symbol(asyncId)
      ]: 10
    },
     timeout: 120000,
     parser:
      HTTPParser {
        '0': [Function: parserOnHeaders
      ],
        '1': [Function: parserOnHeadersComplete
      ],
        '2': [Function: parserOnBody
      ],
        '3': [Function: parserOnMessageComplete
      ],
        '4': [Function: bound onParserExecute
      ],
        _headers: [],
        _url: '',
        _consumed: true,
        socket: [Circular
      ],
        incoming: [Circular
      ],
        outgoing: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function: bound parserOnIncoming
      ]
    },
     on: [Function: socketOnWrap
    ],
     _paused: false,
     _httpMessage:
      ServerResponse {
        _events: [Object
      ],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Circular
      ],
        connection: [Circular
      ],
        _header: null,
        _onPendingData: [Function: bound updateOutgoingData
      ],
        _sent100: false,
        _expect_continue: false,
        req: [Circular
      ],
        locals: {},
      [Symbol(isCorked)
      ]: false,
      [Symbol(outHeadersKey)
      ]: [Object
      ]
    },
    [Symbol(asyncId)
    ]: 117,
    [Symbol(lastWriteQueueSize)
    ]: 0,
    [Symbol(timeout)
    ]:
      Timeout {
        _called: false,
        _idleTimeout: 120000,
        _idlePrev: [TimersList
      ],
        _idleNext: [TimersList
      ],
        _idleStart: 17806,
        _onTimeout: [Function: bound
      ],
        _timerArgs: undefined,
        _repeat: null,
        _destroyed: false,
      [Symbol(unrefed)
      ]: true,
      [Symbol(asyncId)
      ]: 118,
      [Symbol(triggerId)
      ]: 117
    },
    [Symbol(kBytesRead)
    ]: 0,
    [Symbol(kBytesWritten)
    ]: 0
  },
  _consuming: false,
  _dumped: false,
  next: [Function: next
  ],
  baseUrl: '',
  originalUrl: '/search/result?searchradio=Title&author_title=lost',
  _parsedUrl:
   Url {
     protocol: null,
     slashes: null,
     auth: null,
     host: null,
     port: null,
     hostname: null,
     hash: null,
     search: '?searchradio=Title&author_title=lost',
     query: 'searchradio=Title&author_title=lost',
     pathname: '/search/result',
     path: '/search/result?searchradio=Title&author_title=lost',
     href: '/search/result?searchradio=Title&author_title=lost',
     _raw: '/search/result?searchradio=Title&author_title=lost'
  },
  params: {},
  query: { searchradio: 'Title', author_title: 'lost'
  },
  res:
   ServerResponse {
     _events: { finish: [Function: bound resOnFinish
      ]
    },
     _eventsCount: 1,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket:
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [TCP
      ],
        _parent: null,
        _host: null,
        _readableState: [ReadableState
      ],
        readable: true,
        _events: [Object
      ],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState
      ],
        writable: true,
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server
      ],
        _server: [Server
      ],
        timeout: 120000,
        parser: [HTTPParser
      ],
        on: [Function: socketOnWrap
      ],
        _paused: false,
        _httpMessage: [Circular
      ],
      [Symbol(asyncId)
      ]: 117,
      [Symbol(lastWriteQueueSize)
      ]: 0,
      [Symbol(timeout)
      ]: [Timeout
      ],
      [Symbol(kBytesRead)
      ]: 0,
      [Symbol(kBytesWritten)
      ]: 0
    },
     connection:
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [TCP
      ],
        _parent: null,
        _host: null,
        _readableState: [ReadableState
      ],
        readable: true,
        _events: [Object
      ],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState
      ],
        writable: true,
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server
      ],
        _server: [Server
      ],
        timeout: 120000,
        parser: [HTTPParser
      ],
        on: [Function: socketOnWrap
      ],
        _paused: false,
        _httpMessage: [Circular
      ],
      [Symbol(asyncId)
      ]: 117,
      [Symbol(lastWriteQueueSize)
      ]: 0,
      [Symbol(timeout)
      ]: [Timeout
      ],
      [Symbol(kBytesRead)
      ]: 0,
      [Symbol(kBytesWritten)
      ]: 0
    },
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData
    ],
     _sent100: false,
     _expect_continue: false,
     req: [Circular
    ],
     locals: {},
    [Symbol(isCorked)
    ]: false,
    [Symbol(outHeadersKey)
    ]: { 'x-powered-by': [Array
      ]
    }
  },
  body: {},
  route:
   Route {
     path: '/search/result',
     stack: [
      [Layer
      ]
    ],
     methods: { get: true
    }
  }
}