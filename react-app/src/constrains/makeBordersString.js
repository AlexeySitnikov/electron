export function makeBordersString({ setAddInformation, borders }) {
  setAddInformation(`${String(borders.Zmax - borders.Zmin)} ${String((borders.Zmax - borders.Zmin) / 1000)}
      ${String(borders.Xmax - borders.Xmin)} ${String(borders.Xmin / 1000)} ${String(borders.Xmax / 1000)}
      ${String(borders.Ymax - borders.Ymin)} ${String(borders.Ymin / 1000)} ${String(borders.Ymax / 1000)}
      1`)
}
