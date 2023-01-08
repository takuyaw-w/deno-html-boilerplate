type Props = {
  pageTitle: string;
  siteTitle: string;
};

export default function Head(props: Props) {
  const { pageTitle, siteTitle } = props;
  const title = pageTitle !== undefined
    ? `${pageTitle} - ${siteTitle}`
    : `${siteTitle}`;
  return (
    <head>
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </head>
  );
}
