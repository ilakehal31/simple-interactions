// vite.config.ts
import Pages from "vite-plugin-pages";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import PSVG from "vite-plugin-psvg";
import Vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
var config = {
  optimizeDeps: {
    include: [
      "@vueuse/core",
      "@vueuse/shared",
      "@vueuse/router",
      "three",
      "@iconify/iconify",
      "lodash-es",
      "p5i",
      "matter-js",
      "matter-attractors"
    ]
  },
  plugins: [
    Vue(),
    Pages(),
    Components({
      resolvers: [
        IconsResolver({
          prefix: ""
        })
      ]
    }),
    Icons(),
    PSVG(),
    WindiCSS(),
    AutoImport({
      imports: [
        "vue",
        "@vueuse/core"
      ]
    })
  ]
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB0eXBlIHsgVXNlckNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgUGFnZXMgZnJvbSAndml0ZS1wbHVnaW4tcGFnZXMnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJ1xuaW1wb3J0IEljb25zUmVzb2x2ZXIgZnJvbSAndW5wbHVnaW4taWNvbnMvcmVzb2x2ZXInXG5pbXBvcnQgUFNWRyBmcm9tICd2aXRlLXBsdWdpbi1wc3ZnJ1xuaW1wb3J0IFZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgV2luZGlDU1MgZnJvbSAndml0ZS1wbHVnaW4td2luZGljc3MnXG5cbmNvbnN0IGNvbmZpZzogVXNlckNvbmZpZyA9IHtcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgaW5jbHVkZTogW1xuICAgICAgJ0B2dWV1c2UvY29yZScsXG4gICAgICAnQHZ1ZXVzZS9zaGFyZWQnLFxuICAgICAgJ0B2dWV1c2Uvcm91dGVyJyxcbiAgICAgICd0aHJlZScsXG4gICAgICAnQGljb25pZnkvaWNvbmlmeScsXG4gICAgICAnbG9kYXNoLWVzJyxcbiAgICAgICdwNWknLFxuICAgICAgJ21hdHRlci1qcycsXG4gICAgICAnbWF0dGVyLWF0dHJhY3RvcnMnLFxuICAgIF0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBWdWUoKSxcbiAgICBQYWdlcygpLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIEljb25zUmVzb2x2ZXIoe1xuICAgICAgICAgIHByZWZpeDogJycsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9KSxcbiAgICBJY29ucygpLFxuICAgIFBTVkcoKSxcbiAgICBXaW5kaUNTUygpLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgaW1wb3J0czogW1xuICAgICAgICAndnVlJyxcbiAgICAgICAgJ0B2dWV1c2UvY29yZScsXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWdcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sVUFBVTtBQUNqQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxjQUFjO0FBRXJCLElBQU0sU0FBcUI7QUFBQSxFQUN6QixjQUFjO0FBQUEsSUFDWixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxNQUNULFdBQVc7QUFBQSxRQUNULGNBQWM7QUFBQSxVQUNaLFFBQVE7QUFBQSxRQUNWLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsSUFDTCxTQUFTO0FBQUEsSUFDVCxXQUFXO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGO0FBRUEsSUFBTyxzQkFBUTsiLAogICJuYW1lcyI6IFtdCn0K
