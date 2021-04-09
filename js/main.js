tinymce.init({
    selector: '#myEditor',
    height: 1000,
    width: 5000,
    plugins: "fontselect link autoresize code quickbars image lists media table hr",
    toolbar: false,
    menubar: false,
    placeholder: "This is your story",
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
    quickbars_selection_toolbar: "bold italic link | alignleft aligncenter alignright | blockquote fontselect",
    quickbars_insert_toolbar: "h1 h2 h3 code image media table hr",
});