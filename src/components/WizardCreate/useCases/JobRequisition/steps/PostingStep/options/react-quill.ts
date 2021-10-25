export const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent

  [{ header: [1, 2, 3, false] }],

  [{ align: [] }],

  ['clean'] // remove formatting button
];

/*
 * # Quill modules to attach to editor
 * https://quilljs.com/docs/modules/toolbar/
 *
 */
