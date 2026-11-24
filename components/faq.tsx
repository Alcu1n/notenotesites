export function Faq({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <details key={item.question}>
          <summary>
            <span className="faq-num" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="faq-question">{item.question}</span>
            <span className="faq-toggle" aria-hidden="true">
              <span className="faq-plus-h" />
              <span className="faq-plus-v" />
            </span>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
