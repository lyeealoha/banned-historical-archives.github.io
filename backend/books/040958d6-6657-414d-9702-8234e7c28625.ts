export default {
  entity: {
    id: '040958d6-6657-414d-9702-8234e7c28625',
    name: '张春桥同志在济南军区的讲话',
    internal: true,
    official: true,
    type: 'img',
    author: '张春桥、王效禹',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/040958d6-6657-414d-9702-8234e7c28625/1.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/040958d6-6657-414d-9702-8234e7c28625/2.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/040958d6-6657-414d-9702-8234e7c28625/3.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/040958d6-6657-414d-9702-8234e7c28625/4.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/040958d6-6657-414d-9702-8234e7c28625/5.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/040958d6-6657-414d-9702-8234e7c28625/6.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/040958d6-6657-414d-9702-8234e7c28625/7.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/040958d6-6657-414d-9702-8234e7c28625/8.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/040958d6-6657-414d-9702-8234e7c28625/9.jpg',
  },
  parser_option: {
    page_limits: [],
    ext: 'jpg',
    articles: [
      {
        title: '张春桥同志在济南军区的讲话',
        authors: ['张春桥'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1967, month: 5 }],
      },
      {
        title: '王效禹同志讲话',
        authors: ['王效禹'],
        page_start: 2,
        page_end: 4,
        ocr_exceptions: {
          '2': { content_thresholds: [0.25, 0.09, 0.5, 0] },
          '4': { content_thresholds: [0, 0.09, 0, 0.5] },
        },
        dates: [{ year: 1967, month: 5, day: 29 }],
      },
      {
        title: '王效禹同志讲话',
        authors: ['王效禹'],
        page_start: 4,
        page_end: 9,
        dates: [{ year: 1967, month: 5, day: 28 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.09, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/040958d6-6657-414d-9702-8234e7c28625',
};
