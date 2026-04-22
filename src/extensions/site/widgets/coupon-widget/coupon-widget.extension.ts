import { extensions } from "@wix/astro/builders";

export default extensions.customElement({
  id: "d1a7f203-3293-43fa-84b1-ef4ee5d2577a",
  name: "coupon-widget",
  width: {
    defaultWidth: 450,
    allowStretch: true
  },
  height: {
    defaultHeight: 250
  },
  installation: {
    autoAdd: true
  },
  presets: [
    {
      id: "5b00a877-775c-42bc-b609-30e78e437621",
      name: "default",
      thumbnailUrl: "{{BASE_URL}}/coupon-widget-thumbnail.png"
    }
  ],

  tagName: "coupon-widget",
  element: "./extensions/site/widgets/coupon-widget/coupon-widget.tsx",
  settings: "./extensions/site/widgets/coupon-widget/coupon-widget.panel.tsx"
});
