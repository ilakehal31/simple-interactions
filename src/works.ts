export const info = [
  {
    draft: false,
    name: 'Mass',
    number: '001',
  },
]

export const works = info.map((info, idx) => {
  return {
    ...info,
    no: `${idx + 1}`.padStart(3, '0'),
  }
})
