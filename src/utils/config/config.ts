"use client";
export const config = {
  baseURL: "http://localhost:3500/api/v1",
};
export const tinymceOptions = {
  height: 400,
  skin:
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme:dark)").matches
      ? "oxide-dark"
      : "oxide",
  menubar: false,
  plugins: [
    "advlist",
    "autolink",
    "lists",
    "link",
    "image",
    "charmap",
    "tinymcespellchecker",
    "advcode",
    "searchreplace",
    "codesample",
    "mediaembed",
    "emoticons",
    "anchor",
    "editimage",
    "autosave",
    "export",
    "visualblocks",
    "code",
    "fullscreen",
    "insertdatetime",
    "media",
    "table",
    "preview",
    "help",
    "wordcount",
    "powerpaste",
  ],
  toolbar:
    "undo redo print spellcheckdialog formatpainter | blocks fontfamily fontsize | " +
    "bold italic forecolor underline forecolor backcolor | link image | alignleft aligncenter " +
    "alignright alignjustify lineheight | checklist bullist numlist outdent indent | " +
    "removeformat | help",
  content_css:
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme:dark)").matches
      ? "dark"
      : "",
  content_style: `body { font-family:Helvetica,Arial,sans-serif; font-size:14px; background:var(--color-background)}`,
};
