import { app } from "@wix/astro/builders";
import dashboardPage from "./extensions/dashboard/pages/dashboard-page/dashboard-page.extention.ts";

import couponWidget from './extensions/site/widgets/coupon-widget/coupon-widget.extension.ts';

export default app().use(dashboardPage).use(couponWidget);
