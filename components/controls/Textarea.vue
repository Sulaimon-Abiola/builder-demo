<template lang="">
	<div>
		<textarea
			type="text"
			:placeholder="placeholder || ''"
			:defaultValue="defaultValue || ''"
			class="min-h-20 w-full border border-[#babbbd] rounded px-3 outline-none focus:border-[#111111]"
		>
		</textarea>
	</div>
</template>

<script setup>
	defineProps(['defaultValue', 'placeholder'])
</script>

<style lang=""></style>
