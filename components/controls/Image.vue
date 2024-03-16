<template lang="">
	<div class="min-h-20 relative border border-[#babbbd] rounded flex items-center px-3">
		<small>Select image</small>

		<input
			type="file"
			class="w-full border border-[#babbbd] rounded px-3 outline-none focus:border-[#111111] absolute h-full opacity-0"
		/>
	</div>
</template>

<script setup>
	defineProps(['defaultValue', 'placeholder'])
</script>

<style lang=""></style>
