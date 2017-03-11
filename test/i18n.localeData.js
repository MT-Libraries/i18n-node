var i18n = require('../i18n');
var should = require("should");

describe('Locale Data injected', function() {
  beforeEach(function() {
    i18n.configure({
      locales: ['en', 'zh'],
      directory: false,
      localesData: {
        en: {
          'hello': 'hello',
          'cat': 'cat'
        },
        zh: {
          'hello': '你好',
          'cat': '猫咪'
        }
      }
    });
  });

  it('should language data work when injected locale data', function() {
    var req = {
      request: "GET /test",
      __: i18n.__,
      __n: i18n.__n,
      locale: {},
      headers: {}
    };

    i18n.init(req);

    i18n.setLocale(req, 'en');

    req.__('hello').should.equal('hello');
    req.__('cat').should.equal('cat');

    i18n.setLocale(req, 'zh');

    req.__('hello').should.equal('你好');
    req.__('cat').should.equal('猫咪');
  });

});