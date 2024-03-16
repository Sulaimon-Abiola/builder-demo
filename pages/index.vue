<script setup lang="jsx">
	import { storeToRefs } from 'pinia'
	import { useAppStore } from '@/stores/app'

	const appStore = useAppStore()
	const { handleEventEmit } = appStore
	const { sections, currentSidebar } = storeToRefs(appStore)

	const handleEmitEvent = (payload, { id, type }) => handleEventEmit({ ...payload, id, type })

	const componentList = {
		one: resolveComponent('One'),
		two: resolveComponent('Two'),
	}
</script>

<template>
	<div class="flex h-screen">
		<SectionContol v-if="currentSidebar" />

		<div class="flex-1 overflow-y-auto">
			<SectionWrapper
				v-for="(section, index) in sections"
				:key="section.id"
				:isFirst="index === 0"
				:isLast="sections.length === index + 1"
				@emitEvent="(payload) => handleEmitEvent(payload, section)"
			>
				<component :is="componentList[section.type]" v-bind="{ ...section }" />
			</SectionWrapper>
		</div>
	</div>
</template>
