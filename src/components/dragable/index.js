import './style.scss';

function dragable($dom, component, opt = {}) {
  const _opt = {
    left: 0,
    top: 0,
    ...opt,
  };
  const $ = component.$;
  let _drag = {
    top: _opt.top,
    left: _opt.left,
  };
  // localStorage
  if (_opt.key) {
    const storeOpt = JSON.parse(localStorage.getItem('sekai_dragable_' + _opt.key));
    if (storeOpt) {
      _drag = {
        ..._drag,
        ...storeOpt,
      };
    }
  }
  let dragging = false;
  const $drag = $('<div class="dragable"></div>');
  const $dragTitle = $('<div class="title">拖动</div>');
  $drag.append($dragTitle);
  let x = 0;
  let y = 0;
  $drag.css('top', _drag.top + 'px');
  $drag.css('left', _drag.left + 'px');

  function mouseMove(e) {
    e = e || window.event;
    if (dragging) {
      const maxTop = component.CONST.get('winHeight') - $drag.outerHeight();
      const maxLeft = component.CONST.get('winWidth') - $drag.outerWidth();
      _drag.top = e.clientY - y;
      _drag.left = e.clientX - x;
      _drag.top = _drag.top > maxTop ? maxTop : _drag.top;
      _drag.left = _drag.left > maxLeft ? maxLeft : _drag.left;
      _drag.top = _drag.top < 0 ? 0 : _drag.top;
      _drag.left = _drag.left < 0 ? 0 : _drag.left;
      $drag.css('top', _drag.top + 'px');
      $drag.css('left', _drag.left + 'px');
      return false;
    }
    return undefined;
  }

  function mouseUp(e) {
    dragging = false;
    if ($drag[0].releaseCapture) $drag[0].releaseCapture();
    e.cancelBubble = true;
    localStorage.setItem('sekai_dragable_' + _opt.key, JSON.stringify(_drag));
    $(document).unbind('mousemove', mouseMove).unbind('mouseup', mouseUp);
  }

  $dragTitle.mousedown((e) => {
    dragging = true;
    _drag.isDragged = true;
    x = e.clientX - $drag[0].offsetLeft;
    y = e.clientY - $drag[0].offsetTop;
    if ($drag[0].setCapture) $drag[0].setCapture();
    $(document).bind('mousemove', mouseMove).bind('mouseup', mouseUp);
    return false;
  });

  $drag.append($dom);
  return $drag;
}

export default dragable;
