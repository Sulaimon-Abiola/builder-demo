<template>
	<div class="basis-[300px] border-r border-[#dddddd]">
		<div class="py-10 px-5 text-lg font-medium capitalize">Edit section</div>

		<div class="flex">
			<div class="pb-3 px-6 border-b border-[#111111]">Content</div>
		</div>

		<div class="p-5 flex flex-col gap-6">
			<component
				v-for="control in sectionControls"
				:key="control.id"
				:is="componentList[control.type]"
				:defaultValue="currentSection[currentTab][control.key]"
				@inputchange="(val) => handleInputChange(control.key, val)"
			/>
		</div>
	</div>
</template>

<script setup>
	import { watch, computed } from 'vue'
	import { storeToRefs } from 'pinia'
	import { useAppStore } from '@/stores/app'

	import { blocks, getSectionIndex } from '~/misc/helpers.js'

	const appStore = useAppStore()
	const { handleSectionChange } = appStore
	const { currentSidebar, sections } = storeToRefs(appStore)

	const currentTab = ref('content')

	const currentSection = ref(
		sections.value[getSectionIndex(sections.value, currentSidebar?.value.id)]
	)

	const sectionControls = ref(
		blocks?.[currentSidebar?.value.type]['controls']['content']['controls']
	)

	watch(currentSidebar, (newValue) => {
		sectionControls.value = blocks[newValue?.type]['controls'][currentTab.value]['controls']
		currentSection.value = sections.value[getSectionIndex(sections.value, newValue?.id)]
	})

	const handleInputChange = (key, value) => {
		handleSectionChange({ id: currentSection?.value?.id, key, value })
	}

	const componentList = {
		input: resolveComponent('ControlsInput'),
		image: resolveComponent('ControlsImage'),
		textarea: resolveComponent('ControlsTextarea'),
	}
</script>
