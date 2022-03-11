export function render(vdom, container){
  container.appendChild(renderDOM(vdom));
};

export function renderDOM(vdom){
  if (typeof vdom === "string") {
    return document.createTextNode(vdom);
  }

  if (vdom === undefined) return;

  if(typeof vdom.tagName === "string") {
    const $el = document.createElement(vdom.tagName);
    vdom.children.map(renderDOM).forEach((node) => {
      $el.appendChild(node);
    });
    return $el;
  } else {
    const $el = renderDOM(vdom.tagName());
    return $el;
  }
};

const E = (tagName, props = null, children = []) => {
  return { tagName, props, children };
};

export default E;