<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button v-auth="'content.add'" type="primary" icon="" @click="handleCreate"
        >新增
        </a-button
        >
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  import { useGo } from '/@/hooks/web/usePage';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getContents, deleteContent } from '/@/custom/api/cms';
  import { columns } from './data';
  import customSetting from '/@/custom/customSetting';

  export default defineComponent({
    name: 'CmsContentIndex',
    components: { BasicTable, TableAction },
    setup() {
      const go = useGo();
      const [registerTable, { reload }] = useTable({
        title: '模型',
        api: getContents,
        columns,
        formConfig: {
          labelWidth: customSetting.table.formConfig.labelWidth,
        },
        pagination: { pageSize: 10 },
        striped: false,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        canResize: false,
        actionColumn: customSetting.table.actionColumn,
      });

      function handleCreate() {
        go('/cms/content/detail');
      }

      const router = useRouter();

      async function handleEdit(record: Recordable) {
        router.push({
          path: '/cms/content/detail',
          query: {
            contentId: record.contentId,
          },
        });
      }

      function handleDelete(record: Recordable) {
        deleteContent({ id: record.contentId });
        reload();
      }

      return {
        registerTable,
        handleCreate,
        handleEdit,
        handleDelete,
      };
    },
  });
</script>

<style scoped></style>
