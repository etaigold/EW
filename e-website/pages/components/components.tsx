export default function Components(): JSX.Element {
  return (
    <div>
      <div className={"components-style"}>components</div>
      <style jsx>{`
        .components-style {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
}
