import { render } from 'config/tests/utils';
import { htmlSanitizer } from '..';

describe('htmlSanitizer', () => {
  test('Should escape <alert> malicious code', () => {
    const html = '<script>alert("xss")</script>';
    const { container } = render(htmlSanitizer(html));
    expect(container).toMatchSnapshot();
    expect(container).toMatchInlineSnapshot(
      `
      <div>
        <div>
          &lt;script&gt;alert("xss")&lt;/script&gt;
        </div>
      </div>
      `
    );
  });
  test('Should not escape <a>', () => {
    const html = '<a href="https://google.com">google</a>';
    const { container } = render(htmlSanitizer(html));
    expect(container).toMatchSnapshot();
  });
});
