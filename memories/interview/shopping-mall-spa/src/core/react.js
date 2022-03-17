const hooks = [];
let currentComponent = -1;
let root = null;

export const render = (vdom, container) => {
  root = container;
  root.appendChild(renderDOM(vdom));
};

const _render = () => {
  console.log("Rendering...")
  const clone = root.cloneNode(true);
  root.replaceWith(clone);
}

export const useState = (initValue) => {
  const position = currentComponent;

  if(!hooks[position]) {
    hooks[position] = initValue;
  }
  
  return [
    hooks[position],
    (nextValue) => {
      hooks[position] = nextValue;
      _render();
    }
  ]
}

export const E = (tagName, props, ...children) => {
  if(typeof tagName === 'function') {
    currentComponent++;
    return tagName.apply(null, [props, ...children]);
  }
  return { tagName, props, children };
};

const renderDOM = (vdom) => {
  if (typeof vdom === "string") {
    return document.createTextNode(vdom);
  }

  if (vdom === undefined) return;

  const $el = document.createElement(vdom.tagName);
  
  vdom?.props?.forEach((i) => {
    $el.setAttribute(i.k, i.v);
  })
  
  vdom?.children?.map(renderDOM).forEach((node) => {
    $el.appendChild(node);
  });

  return $el;    
};
