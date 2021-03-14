const dragable = document.querySelectorAll(".draggable");

dragable.forEach((element) => {
  element.addEventListener("dragstart", () => {
    element.classList.add("dragging");
  });
  element.addEventListener("dragend", () => {
    element.classList.remove("dragging");
  });
});

const containers = document.querySelectorAll(".container");

containers.forEach((element) => {
  element.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggedEle = document.querySelector(".dragging");
    element.appendChild(draggedEle);
    const afterEle = getDragAfterEle(element, e.clientY);
    console.log(draggedEle, "draggedEle");
    if (afterEle === null) {
      element.appendChild(draggedEle);
    } else {
      element.insertBefore(draggedEle, afterEle);
    }
  });
});

const getDragAfterEle = (container, y) => {
  const dragEle = [...container.querySelectorAll(".draggable:not(.dragging)")];

  return dragEle.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      console.log(box, "box", offset);
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
};
