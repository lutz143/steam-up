import classes from "./PageContainer.module.css";

function PageContainer(props) {
  return (
    <section className={classes.pageBody}>
      {props.children}
    </section>
  )
}

export default PageContainer;
