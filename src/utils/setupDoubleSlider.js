export function setupDoubleSlider() {
  const doubleSliderMin = document.getElementById("doubleSliderMin");
  const doubleSliderMax = document.getElementById("doubleSliderMax");
  const minValue = document.getElementById("minValue");
  const maxValue = document.getElementById("maxValue");

  doubleSliderMin.addEventListener("input", function () {
    minValue.value = doubleSliderMin.value;
    if (parseInt(minValue.value) > parseInt(maxValue.value)) {
      maxValue.value = minValue.value;
      doubleSliderMax.value = minValue.value;
    }
  });

  doubleSliderMax.addEventListener("input", function () {
    maxValue.value = doubleSliderMax.value;
    if (parseInt(maxValue.value) < parseInt(minValue.value)) {
      minValue.value = maxValue.value;
      doubleSliderMin.value = maxValue.value;
    }
  });

  minValue.addEventListener("input", function () {
    doubleSliderMin.value = minValue.value;
    if (parseInt(minValue.value) > parseInt(maxValue.value)) {
      maxValue.value = minValue.value;
      doubleSliderMax.value = minValue.value;
    }
  });

  maxValue.addEventListener("input", function () {
    doubleSliderMax.value = maxValue.value;
    if (parseInt(maxValue.value) < parseInt(minValue.value)) {
      minValue.value = maxValue.value;
      doubleSliderMin.value = maxValue.value;
    }
  });
}
