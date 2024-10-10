interface IComplexRule {
  key: string;
  constraint: boolean;
}

interface IRule {
  rule: string | IComplexRule;
}

const cn = (...items: IRule[]) => {
  const className: string[] = [];
  for (const item of items) {
    if (typeof item.rule === "string") className.push(item.rule);
    else if (typeof item.rule === "object" && item.rule.constraint)
      className.push(item.rule.key);
  }
  return className.join(" ");
};

export { cn };
