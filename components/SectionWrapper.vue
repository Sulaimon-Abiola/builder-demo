<template>
	<div class="section-wrapper relative group">
		<div class="hidden absolute right-5 top-5 z-10 group-hover:flex gap-4">
			<button
				@click="$emit('emitEvent', { eventType: 'edit' })"
				class="w-12 h-12 rounded-full bg-[#074d78] grid place-content-center"
			>
				<!-- prettier-ignore -->
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.06616 18.3151C3.07546 17.9381 3.08011 17.7497 3.12568 17.5726C3.16608 17.4156 3.23007 17.2658 3.31544 17.1282C3.41171 16.973 3.54444 16.8396 3.8099 16.573L16.8626 3.46297C17.3862 2.93708 18.204 2.84896 18.8267 3.25131C19.565 3.7283 20.1957 4.3551 20.6785 5.09146L20.7123 5.14307C20.7368 5.18037 20.749 5.19902 20.7594 5.21582C21.1427 5.83327 21.0616 6.63294 20.5622 7.16005C20.5486 7.17439 20.5329 7.19018 20.5014 7.22177L7.52811 20.2521C7.25274 20.5287 7.11505 20.6669 6.95435 20.7658C6.81188 20.8534 6.65654 20.9178 6.49406 20.9568C6.31079 21.0008 6.11608 21.0005 5.72665 20.9999L3 20.9955L3.06616 18.3151Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
			</button>
			<button
				v-if="!isFirst"
				@click="$emit('emitEvent', { eventType: 'moveUp' })"
				class="w-12 h-12 rounded-full bg-[#806600] grid place-content-center"
			>
				<!-- prettier-ignore -->
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8.8304C7.55556 6.727 9.37278 4.83783 11.4057 3.20952C11.5801 3.06984 11.79 3 12 3M18 8.8304C16.4444 6.727 14.6272 4.83783 12.5943 3.20952C12.4199 3.06984 12.21 3 12 3M12 3L12 21" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
			</button>
			<button
				v-if="!isLast"
				@click="$emit('emitEvent', { eventType: 'moveDown' })"
				class="w-12 h-12 rounded-full bg-[#806600] grid place-content-center"
			>
				<!-- prettier-ignore -->
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 15.1696C7.55556 17.273 9.37278 19.1622 11.4057 20.7905C11.5801 20.9302 11.79 21 12 21M18 15.1696C16.4444 17.273 14.6272 19.1622 12.5943 20.7905C12.4199 20.9302 12.21 21 12 21M12 21L12 3" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
			</button>
			<button
				@click="$emit('emitEvent', { eventType: 'delete' })"
				class="w-12 h-12 rounded-full bg-[#661919] grid place-content-center"
			>
				<!-- prettier-ignore -->
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7L14.8944 4.78885C14.3463 3.69253 13.2257 3 12 3C10.7743 3 9.65374 3.69253 9.10557 4.78885L8 7M4 7H20M6 7H18V15C18 16.8638 18 17.7957 17.6955 18.5307C17.2895 19.5108 16.5108 20.2895 15.5307 20.6955C14.7956 21 13.8638 21 12 21C10.1362 21 9.20435 21 8.46927 20.6955C7.48915 20.2895 6.71046 19.5108 6.30448 18.5307C6 17.7957 6 16.8638 6 15V7Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
			</button>
		</div>
		<slot></slot>
	</div>
</template>

<script setup>
	defineProps(['isFirst', 'isLast'])
</script>
