function Loading() {
  return (
    <div style={{
      width: '100%',
      height: '70 vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: "center",
    }}>
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
