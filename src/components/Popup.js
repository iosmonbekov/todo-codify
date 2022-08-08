function Popup({active, hidePopup}) {
  function foo(event) {
    event.stopPropagation();
  }
  function boo() {
    console.log('close');
    hidePopup();
  }
  return (
    <div className={`popup ${active && 'active'}`} onClick={boo}>
      <div className='popup-body' onClick={foo}>
        <h1>Popup</h1>
        <div>TEXT TEXT TEXT</div>
      </div>
    </div>
  );
}

export default Popup;
