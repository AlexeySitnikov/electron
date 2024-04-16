export function makeBordersString({ setAddInformation, borders }) {
  if (borders.type === '3D') {
    setAddInformation(`${String((borders.Zmax - borders.Zmin) / borders.deltaZ)} ${String((borders.Zmax - borders.Zmin) / 1000)}
${String((borders.Xmax - borders.Xmin) / borders.deltaX)} ${String(borders.Xmin / 1000)} ${String(borders.Xmax / 1000)}
${String((borders.Ymax - borders.Ymin) / borders.deltaY)} ${String(borders.Ymin / 1000)} ${String(borders.Ymax / 1000)}
1\n`)
  } else if (borders.type === '1D') {
    setAddInformation(`${String(borders.linesZ)} ${String(borders.Zmax / 1000)}
1\n`)
  } else {
    setAddInformation('unknown')
  }
}
