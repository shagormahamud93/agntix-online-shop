import Link from "next/link";

interface ContentItem {
  url: string;
  title: string;
}

interface SingleWidgetProps {
  col: string;
  col_2: string;
  col_3: string;
  title: string;
  contents: ContentItem[];
}

const SingleWidget: React.FC<SingleWidgetProps> = ({ col, col_2, col_3, title, contents }) => {
  return (
    <div className={`col-xxl-${col} col-xl-${col} col-lg-3 col-md-${col_2} col-sm-6`}>
      <div className={`footer__widget mb-50 footer-col-11-${col_3}`}>
        <h3 className="footer__widget-title">{title}</h3>
        <div className="footer__widget-content">
          <ul>
            {contents.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleWidget;
