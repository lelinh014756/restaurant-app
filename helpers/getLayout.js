export default function GetLayout(Component) {
  Component.getLayout = function PageLayout(page) {
    return <>{page}</>;
  };
}
