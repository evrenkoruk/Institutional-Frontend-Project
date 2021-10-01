<template>
  <div class="page --reference">
    <Banner :title="$t(`reference`)" />
    <div class="reference-container padding-top">
      <div class="reference-header">
        <div
          class="reference-tag"
          v-html="fixed[`sub_header_${$i18n.locale}`]"
        ></div>
        <div
          class="reference-title"
          v-html="fixed[`header_${$i18n.locale}`]"
        ></div>
      </div>
      <div class="reference-list --desktop">
        <div class="reference-search">
          <input
            type="text"
            value=""
            :placeholder="$t('searchinput')"
            class="form-control"
          />

          <NuxtLink class="link-button --no-border" :to="localePath('')">
            {{ $t("search") }}
          </NuxtLink>
        </div>
        <div class="reference-list-container">
          <div class="vue-table">
            <table class="table table-striped" cellpadding="5" cellspacing="0">
              <thead>
                <tr>
                  <th>
                    <a @click="sortBy(`work_name_${$i18n.locale}`)"
                      >{{ $t("workname") }} <i class="fas fa-sort"></i
                    ></a>
                  </th>
                  <th>
                    <a @click="sortBy(`capacity_${$i18n.locale}`)"
                      >{{ $t("kpatch") }} <i class="fas fa-sort"></i
                    ></a>
                  </th>
                  <th>
                    <a @click="sortBy('area')"
                      >{{ $t("alan") }} <i class="fas fa-sort"></i
                    ></a>
                  </th>
                  <th>
                    <a @click="sortBy('year')"
                      >{{ $t("buildyears") }} <i class="fas fa-sort"></i
                    ></a>
                  </th>
                  <th>
                    <a @click="sortBy('location')"
                      >{{ $t("buildyer") }} <i class="fas fa-sort"></i
                    ></a>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(reference, reference_index) in references"
                  :key="`reference-index-${reference_index}`"
                >
                  <td>{{ reference[`work_name_${$i18n.locale}`] }}</td>
                  <td>{{ reference[`capacity_${$i18n.locale}`] }}</td>
                  <td>{{ reference.area }}</td>
                  <td>{{ reference.year }}</td>
                  <td>{{ reference.location }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="reference-list --mobile">
        <div class="reference-list-container">
          <div
            class="reference-list-item"
            v-for="(reference, index) in references"
            :key="index"
          >
            <b>{{ $t("workname") }}:</b>
            {{ reference[`work_name_${$i18n.locale}`] }} <br />
            <b>{{ $t("kpatch") }}:</b>
            {{ reference[`capacity_${$i18n.locale}`] }} <br />
            <b>{{ $t("alan") }}:</b> {{ reference.area }} <br />
            <b>{{ $t("buildyears") }}:</b> {{ reference.year }} <br />
            <b>{{ $t("buildyer") }}:</b> {{ reference.location }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/sass/pages/reference.scss";
</style>
<script>
import Banner from "@/components/Banner";
export default {
  components: {
    Banner,
  },
  data() {
    return {
      reference_sorted: [],
      sort_item: true,
      fixed: null,
      references: [],
    };
  },
  methods: {
    sortBy: function (sortKey) {
      this.references.sort(
        function (a, b) {
          if (this.sort_item) {
            if (a[sortKey] < b[sortKey]) {
              return -1;
            }
            if (a[sortKey] > b[sortKey]) {
              return 1;
            }
            return 0;
          } else {
            if (a[sortKey] < b[sortKey]) {
              return 1;
            }
            if (a[sortKey] > b[sortKey]) {
              return -1;
            }
            return 0;
          }
        }.bind(this)
      );
      this.sort_item = !this.sort_item;
    },
  },
  async asyncData(context) {
    let fixed;
    let references;
    await context.app.$axios
      .$get(`https://ultavlar-service.saasdev.net/api/web/references_page`, {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          Accept: "application/json",
          "Cache-Control": "no-cache",
        },
      })
      .then((response) => {
        fixed = response.fixed;
        references = response.reference;
      });
    return {
      fixed,
      references,
    };
  },
};
</script>
