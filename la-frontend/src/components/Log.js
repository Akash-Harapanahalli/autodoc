class Log {
  constructor (funboi) {
    this.string = funboi
    this.tags = {}
    this.timestamp = ''
  }

  genTags () {
    // create functionality
  }
}

var aLog = new Log('Henlo.')

var allThemLogs = []

for (var i = 0; i < 100; i++) {
  allThemLogs[i] = new Log('Henlo. This is log #' + i)
}
