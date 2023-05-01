export const getServerSideProps = (context) => {
  return {
    props: {
      pdfLink: context.query.pdfLink,
    },
  }
}

export default function faction(props) {
  return <iframe src={props.pdfLink} width="100%" height="100%" />
}
