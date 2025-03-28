{
	"options": {
		// ECL
		"zecl_lins_jump_addr": { "val": 0x40A9A4 },
		"zecl_lins_jump_base_count": { "val": 135 },
		"zecl_lins_jump_new_count": { "val": 21 },
		// Timelines
		"zecl_hins_jump_addr": { "val": 0x411D63 },
		"zecl_hins_jump_base_count": { "val": 13 },
		"zecl_hins_jump_new_count": { "val": 1 },
		// Int Vars
		// Commented out because of backwards ordering. Look at codecave ZECL6_Copy_EoSD_Inverted_Ivar_Jank_patch_init
		//"zecl_ivar_jump_addr": { "val": 0x40B31C },
		"zecl_ivar_jump_base_count": { "val": 25 },
		"zecl_ivar_jump_new_count": { "val": 1 },
		
		"ecl_lins_break_addr": {
			"type": "u32",
			"val": 0x40A008
		},
		"ecl_lins_continue_addr": {
			"type": "u32",
			"val": 0x4074CE
		},
		"ecl_hins_break_addr": {
			"type": "u32",
			"val": 0x411D15
		},
		"ecl_hins_continue_addr": {
			"type": "u32",
			"val": 0x4115D3
		},
		"ecl_ivar_break_addr": {
			"type": "u32",
			"val": 0x40B318
		},
		"ecl_get_var_addr": {
			"type": "u32",
			"val": 0x40AFB0
		},
		"ecl_get_float_addr": {
			"type": "u32",
			"val": 0x40B380
		},
		"ecl_write_var_addr": {
			"type": "u32",
			"val": 0x40B3C0
		},
		
		"zecl_disable_alloc_funcs": {
			"val": false
		},
		
		"stdfunc_free_addr": { "val": 0x45BAED },
		"stdfunc_delete_addr": { "val": 0x45BF1F },
		"stdfunc_malloc_addr": { "val": 0x45BC05 },
		"stdfunc_new_addr": { "val": 0x45BF24 },
		"stdfunc_calloc_addr": { "val": 0x45E194 },
		"stdfunc_realloc_addr": { "val": 0x45E24F },
		"stdfunc_msize_addr": { "val": 0x45E3FC },
		"stdfunc_memcpy_addr": { "val": 0x45CC90 },
		"stdfunc_memmove_addr": { "val": 0x45CFD0 },
		"stdfunc_memset_addr": { "val": 0x45CC30 },
		"stdfunc_strlen_addr": { "val": 0x45CBA0 },
		"stdfunc_strcpy_addr": { "val": 0x45D490 },
		"stdfunc_strcat_addr": { "val": 0x45D4A0 },
		"stdfunc_strcmp_addr": { "val": 0x466A50 },
		"stdfunc_strncmp_addr": { "val": 0x45D5C0 },
		"stdfunc_sprintf_addr": { "val": 0x45C386 },
		"stdfunc_sscanf_addr": { "val": 0 },
		"stdfunc_ftol2_addr": { "val": 0x45BA78 },
	},
	"codecaves": {
		"ZECL6_Copy_EoSD_Inverted_Ivar_Jank_patch_init": {
			"export": true,
			"access": "re",
			"code": "\
56 \
57 \
FC \
B9 <option:zecl_ivar_jump_base_count> \
BE <0x40B31C> \
BF (<codecave:ZECL_int_var_jump_table> + <option:zecl_ivar_jump_new_count> * 4) \
F3 A5 \
5F \
5E \
C3 \
"
		},
		"ZECL_low_ins_jump_table": {
			"code": "\
<codecave:ZECL6_debug_breakpoint> \
<codecave:ZECL6_thcrap_expr> \
(<cpuid:avx> ? <codecave:ZECL6_cast_avx> : <codecave:ZECL6_cast_sse>) \
<codecave:ZECL6_math_bit_and> \
<codecave:ZECL6_math_bit_or> \
<codecave:ZECL6_math_bit_xor> \
<codecave:ZECL6_math_bit_neg> \
<codecave:ZECL6_math_shl> \
<codecave:ZECL6_math_shr> \
<codecave:ZECL6_math_sar> \
<codecave:ZECL6_math_rol> \
<codecave:ZECL6_math_ror> \
<codecave:ZECL6_math_udiv> \
<codecave:ZECL6_math_umod> \
<codecave:ZECL6_math_neg> \
<codecave:ZECL6_set_int_indirect> \
<codecave:ZECL6_set_int_abs> \
<codecave:ZECL6_set_int_abs> \
<codecave:ZECL6_math_sin> \
<codecave:ZECL6_math_cos> \
<codecave:ZECL6_inline_switch> \
(<cpuid:avx> ? <codecave:ZECL6_cast_avx> : <codecave:ZECL6_cast_sse>) \
<codecave:ZECL6_math_neg> \
"
		},
		"ZECL_high_ins_jump_table": {
			"code": "\
<codecave:ZECL6_timeline_goto> \
"
		},
		"ZECL_int_var_jump_table": {
			"code": "\
<codecave:ZECL6_compare_register_int_var> \
"
		},
		// Memory locations:
		// current_instruction			[EBP-1C]
		// current_instruction->args	[EBP-18]
		// enemy						[EBP+8]
		// int scratch					[EBP-10]
		// float scratch				[EBP-4], [EBP-8], [EBP-C]
		//
		// Available registers:
		// Default: ESI, EDI
		// Patched:
		//
		// Notes:
		// -Relies on ecl_get_var not modifying stack args
		"ZECL6_debug_breakpoint": {
			"access": "re",
			"code": "\
CC \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL6_thcrap_expr": {
			"access": "re",
			"code": "\
8B75 E8 \
8D4E 04 \
8D7D F0 \
31D2 \
6A 00 \
6A 00 \
6A 00 \
57 \
E8 [eval_expr] \
31C9 \
85C0 \
0F94C1 \
8B45 08 \
8988 D4090000 \
0F84 [<option:ecl_lins_break_addr>] \
57 \
FF36 \
50 \
E8 [<option:ecl_write_var_addr>] \
83C4 0C \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL6_cast_sse": {
			"ignore": "<cpuid:avx>",
			"access": "re",
			"code": "\
8B75 E8 \
8B7D 08 \
8D4D F0 \
51 \
56 \
57 \
E8 [<option:ecl_get_var_addr>] \
83C6 04 \
8974E4 04 \
8B7D F0 \
89C6 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
8B4D F0 \
89FA \
09CA \
83FA 01 \
0F87 [<option:ecl_lins_break_addr>] \
29D1 \
83F9 01 \
74 0D \
85C9 \
75 14 \
8B08 \
890E \
E9 [<option:ecl_lins_break_addr>] \
F30F2C08 \
890E \
E9 [<option:ecl_lins_break_addr>] \
F30F2A00 \
F30F1106 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL6_cast_avx": {
			"enable": "<cpuid:avx>",
			"access": "re",
			"code": "\
8B75 E8 \
8B7D 08 \
8D4D F0 \
51 \
56 \
57 \
E8 [<option:ecl_get_var_addr>] \
83C6 04 \
8974E4 04 \
8B7D F0 \
89C6 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
8B4D F0 \
89FA \
09CA \
83FA 01 \
0F87 [<option:ecl_lins_break_addr>] \
29D1 \
83F9 01 \
74 0D \
85C9 \
75 14 \
8B08 \
890E \
E9 [<option:ecl_lins_break_addr>] \
C5FA 2C08 \
890E \
E9 [<option:ecl_lins_break_addr>] \
C5FA 2A00 \
C5FA 1106 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL6_math_bit_and": {
			"access": "re",
			"code": "\
8B75 E8 \
8B7D 08 \
8D4D F0 \
51 \
56 \
57 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
837D F0 00 \
0F85 [<option:ecl_lins_break_addr>] \
83C6 04 \
6A 00 \
56 \
57 \
89C7 \
E8 [<option:ecl_get_var_addr>] \
83C6 04 \
8974E4 04 \
89C6 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
8B10 \
2316 \
8917 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL6_math_bit_or": {
			"access": "re",
			"code": "\
8B75 E8 \
8B7D 08 \
8D4D F0 \
51 \
56 \
57 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
837D F0 00 \
0F85 [<option:ecl_lins_break_addr>] \
83C6 04 \
6A 00 \
56 \
57 \
89C7 \
E8 [<option:ecl_get_var_addr>] \
83C6 04 \
8974E4 04 \
89C6 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
8B10 \
0B16 \
8917 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL6_math_bit_xor": {
			"access": "re",
			"code": "\
8B75 E8 \
8B7D 08 \
8D4D F0 \
51 \
56 \
57 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
837D F0 00 \
0F85 [<option:ecl_lins_break_addr>] \
83C6 04 \
6A 00 \
56 \
57 \
89C7 \
E8 [<option:ecl_get_var_addr>] \
83C6 04 \
8974E4 04 \
89C6 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
8B10 \
3316 \
8917 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL6_math_bit_neg": {
			"access": "re",
			"code": "\
8B75 E8 \
8B7D 08 \
8D4D F0 \
51 \
56 \
57 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
837D F0 00 \
0F85 [<option:ecl_lins_break_addr>] \
83C6 04 \
6A 00 \
56 \
57 \
89C6 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
8B08 \
F7D1 \
890E \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL6_math_shl": {
			"access": "re",
			"code": "\
8B75 E8 \
8B7D 08 \
8D4D F0 \
51 \
56 \
57 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
837D F0 00 \
0F85 [<option:ecl_lins_break_addr>] \
83C6 04 \
6A 00 \
56 \
57 \
89C7 \
E8 [<option:ecl_get_var_addr>] \
83C6 04 \
8974E4 04 \
89C6 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
8B16 \
0FB608 \
D3E2 \
8917 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL6_math_shr": {
			"access": "re",
			"code": "\
8B75 E8 \
8B7D 08 \
8D4D F0 \
51 \
56 \
57 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
837D F0 00 \
0F85 [<option:ecl_lins_break_addr>] \
83C6 04 \
6A 00 \
56 \
57 \
89C7 \
E8 [<option:ecl_get_var_addr>] \
83C6 04 \
8974E4 04 \
89C6 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
8B16 \
0FB608 \
D3EA \
8917 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL6_math_sar": {
			"access": "re",
			"code": "\
8B75 E8 \
8B7D 08 \
8D4D F0 \
51 \
56 \
57 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
837D F0 00 \
0F85 [<option:ecl_lins_break_addr>] \
83C6 04 \
6A 00 \
56 \
57 \
89C7 \
E8 [<option:ecl_get_var_addr>] \
83C6 04 \
8974E4 04 \
89C6 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
8B16 \
0FB608 \
D3FA \
8917 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL6_math_rol": {
			"access": "re",
			"code": "\
8B75 E8 \
8B7D 08 \
8D4D F0 \
51 \
56 \
57 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
837D F0 00 \
0F85 [<option:ecl_lins_break_addr>] \
83C6 04 \
6A 00 \
56 \
57 \
89C7 \
E8 [<option:ecl_get_var_addr>] \
83C6 04 \
8974E4 04 \
89C6 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
8B16 \
0FB608 \
D3C2 \
8917 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL6_math_ror": {
			"access": "re",
			"code": "\
8B75 E8 \
8B7D 08 \
8D4D F0 \
51 \
56 \
57 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
837D F0 00 \
0F85 [<option:ecl_lins_break_addr>] \
83C6 04 \
6A 00 \
56 \
57 \
89C7 \
E8 [<option:ecl_get_var_addr>] \
83C6 04 \
8974E4 04 \
89C6 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
8B16 \
0FB608 \
D3CA \
8917 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL6_math_udiv": {
			"access": "re",
			"code": "\
8B75 E8 \
8B7D 08 \
8D4D F0 \
51 \
56 \
57 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
837D F0 00 \
0F85 [<option:ecl_lins_break_addr>] \
83C6 04 \
6A 00 \
56 \
57 \
89C7 \
E8 [<option:ecl_get_var_addr>] \
83C6 04 \
8974E4 04 \
89C6 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
89C1 \
8B06 \
31D2 \
F731 \
8907 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL6_math_umod": {
			"access": "re",
			"code": "\
8B75 E8 \
8B7D 08 \
8D4D F0 \
51 \
56 \
57 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
837D F0 00 \
0F85 [<option:ecl_lins_break_addr>] \
83C6 04 \
6A 00 \
56 \
57 \
89C7 \
E8 [<option:ecl_get_var_addr>] \
83C6 04 \
8974E4 04 \
89C6 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
89C1 \
8B06 \
31D2 \
F731 \
8917 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL6_math_neg": {
			"access": "re",
			"code": "\
8B75 E8 \
8B7D 08 \
8D4D F0 \
51 \
56 \
57 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
8B4D F0 \
83F9 01 \
0F87 [<option:ecl_lins_break_addr>] \
83C6 04 \
6A 00 \
56 \
57 \
89C6 \
85C9 \
75 13 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
31C9 \
2B08 \
890E \
E9 [<option:ecl_lins_break_addr>] \
E8 [<option:ecl_get_float_addr>] \
83C4 0C \
8B00 \
35 00000080 \
8906 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL6_set_int_indirect": {
			"access": "re",
			"code": "\
8B75 E8 \
8B7D 08 \
8D4D F0 \
51 \
56 \
57 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
837D F0 01 \
0F87 [<option:ecl_lins_break_addr>] \
83C6 04 \
6A 00 \
56 \
57 \
89C6 \
E8 [<option:ecl_get_var_addr>] \
8944E4 04 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
8B10 \
8916 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL6_set_int_abs": {
			"access": "re",
			"code": "\
8B75 E8 \
8B7D 08 \
8D4D F0 \
51 \
56 \
57 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
837D F0 01 \
0F87 [<option:ecl_lins_break_addr>] \
8B56 04 \
8910 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL6_math_sin": {
			"access": "re",
			"code": "\
8B75 E8 \
8B7D 08 \
8D4D F0 \
51 \
56 \
57 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
837D F0 01 \
0F85 [<option:ecl_lins_break_addr>] \
83C6 04 \
6A 00 \
56 \
57 \
89C6 \
E8 [<option:ecl_get_float_addr>] \
83C4 0C \
D900 \
E8 [0x45BCE0] \
D91E \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL6_math_cos": {
			"access": "re",
			"code": "\
8B75 E8 \
8B7D 08 \
8D4D F0 \
51 \
56 \
57 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
837D F0 01 \
0F85 [<option:ecl_lins_break_addr>] \
83C6 04 \
6A 00 \
56 \
57 \
89C6 \
E8 [<option:ecl_get_float_addr>] \
83C4 0C \
D900 \
E8 [0x45BD90] \
D91E \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL6_inline_switch": {
			"access": "re",
			"code": "\
8B75 E4 \
8B7D 08 \
8D4E 0C \
6A 00 \
51 \
57 \
E8 [<option:ecl_get_var_addr>] \
83C4 0C \
8B08 \
3B4E 10 \
BA FFFFFFFF \
0F46D1 \
8B44D6 1C \
8987 9C090000 \
0374D6 20 \
8975 E4 \
E9 [<option:ecl_lins_continue_addr>] \
"
		},
		"ZECL6_timeline_goto": {
			"access": "re",
			"code": "\
8B8D 78FFFFFF \
8B81 DCE50E00 \
0FBF50 02 \
8991 E8E50E00 \
0340 08 \
8981 DCE50E00 \
E9 [<option:ecl_hins_continue_addr>] \
"
		},
		"ZECL6_compare_register_int_var": {
			"access": "re",
			"code": "\
8B4D 10 \
85C9 \
74 06 \
C701 00000000 \
8B45 08 \
05 D4090000 \
E9 [<option:ecl_ivar_break_addr>] \
"
		},
	},
	"binhacks": {
		"ZECL6_run_ecl_EBX_push": {
			"ignore": true,
			"addr": 0x4074BD,
			"code": "53 89C2",
			"expect": "8B55 08"
		},
		"ZECL6_run_ecl_EBX_pop": {
			"ignore": true,
			"addr": 0x40A99C,
			"code": "5B 5F 5E C9 C2 0400 CC",
			"expect": "5F 5E 8BE5 5D C2 0400"
		},
		
		"ZECL_low_ins_jump_table_replace": {
			"addr": 0x407547
		},
		"ZECL_low_ins_max_replace": {
			"enable": "<option:zecl_lins_jump_new_count>",
			"addr": 0x407534,
			"code": "(<option:zecl_lins_jump_base_count> + <option:zecl_lins_jump_new_count> - 1)",
			"expect": "(<option:zecl_lins_jump_base_count> - 1)",
		},
		"ZECL_high_ins_jump_table_replace": {
			"addr": 0x41163E
		},
		"ZECL_high_ins_max_replace": {
			"enable": "<option:zecl_hins_jump_new_count>",
			"addr": 0x41162E,
			"code": "(u8:<option:zecl_hins_jump_base_count> + <option:zecl_hins_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_hins_jump_base_count> - 1)"
		},
		"ZECL_int_var_jump_table_replace": {
			"addr": 0x40AFE8,
			"expect": "<0x40B31C>"
		},
		"ZECL_int_var_max_replace": {
			"enable": "<option:zecl_ivar_jump_new_count>",
			"addr": 0x40AFDB,
			"code": "(u8:<option:zecl_ivar_jump_base_count> + <option:zecl_ivar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_ivar_jump_base_count> - 1)",
		},
		"ZECL6_int_var_calc_adjust": {
			"addr": 0x40AFD1,
			"code": "(10000 + <option:zecl_ivar_jump_base_count> + <option:zecl_ivar_jump_new_count>)",
			"expect": "(10000 + <option:zecl_ivar_jump_base_count>)",
		},
		
		"ZECL6_FixLaserBlend_A": {
			"addr": 0x416008,
			"code": "\
3D FF000000 \
B9 FF000000 \
0F4CC8 \
8B55 D8 \
884A 7F \
E9 [0x4160F1] \
<nop:12> \
",
		},
		"ZECL6_FixLaserBlend_B": {
			"addr": 0x4162D9,
			"code": "DB81 50020000",
		},
		"ZECL6_FixLaserBlend_C": {
			"addr": 0x4162F0,
			"code": "\
8D90 01FFFFFF \
F7DA \
31C9 \
3D FF000000 \
0F4CCA \
8B45 D8 \
8848 7F \
E9 [0x41638F] \
<nop:4> \
"
		},
		
		"ZECL6_MoreLineLasers_A": {
			"addr": 0x416D9B,
			"code": "68 (674)",
			"expected": "68 (666)"
		},
		"ZECL6_MoreLineLasers_B": {
			"addr": 0x46A79C,
			"code": "(674)(676)(676)(676)(675)",
			"expected": "(666)(668)(668)(668)(667)"
		},
		"ZECL6_MoreLineLasers_C": {
			"addr": 0x476298,
			"code": "\
(677) ???????? (678) ???????? \
(679) ???????? (680) ???????? \
(683) ???????? (684) ???????? \
(685) ???????? (686) ???????? \
(687) ???????? (688) ???????? \
(689) ???????? (690) ???????? \
(691) ???????? (692) ???????? \
(692) ???????? (692) ???????? \
(699) ???????? (681) ???????? \
(682) ???????? (693) ???????? \
",
			"expected": "\
(669) ???????? (670) ???????? \
(671) ???????? (672) ???????? \
(675) ???????? (676) ???????? \
(677) ???????? (678) ???????? \
(679) ???????? (680) ???????? \
(681) ???????? (682) ???????? \
(683) ???????? (684) ???????? \
(684) ???????? (684) ???????? \
(691) ???????? (673) ???????? \
(674) ???????? (685) ???????? \
"
		},
		"ZECL6_MoreLineLaser_D": {
			"addr": [
				0x404247,
				0x40424A,
				0x40F2A9,
				0x40F2D1,
				0x40F2F9,
				0x40F321,
				0x40F343,
				0x40F365,
				0x40F387,
				0x418869,
				0x418897
			],
			"code": "(u16:699)",
			"expected": "(u16:691)"
		},
		
		
		"ZECL_stdfunc_free_replace": {
			"addr": [ 0x404607, 0x40462E, 0x40741D, 0x41079D, 0x410DD4, 0x418753, 0x42208D, 0x4220F3, 0x42210D, 0x42260B, 0x422617, 0x422AB7, 0x422AC3, 0x424893, 0x425D80, 0x42AA75, 0x42B0AB, 0x42B12C, 0x42B1D5, 0x42B23D, 0x42B456, 0x42B7F8, 0x42B801, 0x42BC25, 0x42C72F, 0x42F697, 0x430794, 0x4307EF, 0x430847, 0x4308B8, 0x430917, 0x430961, 0x4309D3, 0x430EAD, 0x431D35, 0x431D5E, 0x432187, 0x43223E, 0x435231, 0x43525A, 0x438358, 0x438448, 0x438A6B, 0x438AE7, 0x43A700, 0x43C90F, 0x43CA50, 0x43CBCD, 0x43CDDD, 0x43CE09, 0x4509BE, 0x450A0C, 0x451E7A, 0x45C59B, 0x45E27A, 0x45F240, 0x45F4FC, 0x45F59D, 0x45F5B2, 0x461664, 0x461687, 0x461699, 0x4616A1, 0x4616BC, 0x4616C4, 0x4616EB, 0x4616F3, 0x462BEF, 0x4637FB, 0x464052, 0x464077, 0x464347, 0x4666B5, 0x466726, 0x466747, 0x46674F, 0x466757, 0x46675F, 0x466767, 0x46676F, 0x466776, 0x46677E, 0x466786, 0x46678E, 0x466796, 0x46679E, 0x4667A6, 0x4667AE, 0x4667B6, 0x4667BE, 0x4667C9, 0x4667D1, 0x4667D9, 0x4667E1, 0x4667E9, 0x4667F1, 0x4667F9, 0x466801, 0x466809, 0x466811, 0x466819, 0x466821, 0x466829, 0x466831, 0x466839, 0x466841, 0x46684F, 0x46685A, 0x466865, 0x466870, 0x46687B, 0x466886, 0x466891, 0x46689C, 0x4668A7, 0x4668B2, 0x4668BD, 0x4668E5, 0x466902, 0x46691E, 0x46694A, 0x466967, 0x466984, 0x4669A1, 0x4669BE, 0x4669DB, 0x4669F7, 0x466E03, 0x4670F9, 0x4675F1, 0x467C19, 0x467C27, 0x467D5D, 0x467D87, 0x468ACB, 0x468AEC, ],
		},
		"ZECL_stdfunc_delete_replace": {
			"addr": [ 0x410E01, 0x41B241, 0x41CCCA, 0x41CF0D, 0x42059A, 0x423E73, 0x424351, 0x4245F5, 0x425DA7, 0x42AA8A, 0x42F6AA, 0x430256, 0x430350, 0x4306B3, 0x43ABC9, 0x43AC0B, 0x43AD8D, 0x43AE24, 0x43AE6C, 0x43B49D, 0x43BA41, 0x43BAB1, 0x43BDE0, 0x43BE23, 0x43C432, 0x43C760, 0x43C8AC, 0x43C8FC, 0x43F6BF, 0x43F731, 0x440775, 0x440B4A, 0x440F37, 0x440F4C, 0x441526, 0x441549, 0x44155E, 0x441575, 0x44157E, 0x441586, 0x44158E, 0x441595, 0x4419F5, 0x441A18, 0x441A2D, 0x441A45, 0x441A4E, 0x441A56, 0x441A5E, 0x441A66, 0x441A6D, 0x442C5E, 0x442D00, 0x442DD1, 0x442DD9, 0x442E36, 0x442F67, 0x442F6F, 0x4432D3, 0x4432DE, 0x443699, 0x4436A4, 0x443A9C, 0x443AA4, 0x443AAC, 0x443AB4, 0x4440E1, 0x4440E9, 0x4440F1, 0x4440F9, 0x444101, 0x444256, 0x44426A, 0x444280, 0x444296, 0x4457D2, 0x445BC9, 0x445BDC, 0x445BF1, 0x445C06, 0x445FC4, 0x446033, 0x446B98, 0x449620, 0x44965C, 0x4496A8, 0x449CEA, 0x449D06, 0x449D22, 0x449D43, 0x469114, 0x469128, 0x46916C, 0x469177, 0x469194, 0x469203, 0x46921A, 0x469245, 0x469264, 0x469284, 0x4692C4, 0x4692CF, 0x469344, 0x46936F, 0x469379, 0x469383, 0x46938D, 0x469397, 0x4693A1, 0x4693AB, ],
		},
		"ZECL_stdfunc_malloc_replace": {
			"addr": [ 0x40479D, 0x41E424, 0x42223F, 0x4222E9, 0x4229DB, 0x422A2B, 0x42A789, 0x42B0FE, 0x42B252, 0x42B400, 0x42B81D, 0x43CA34, 0x43CB96, 0x45098F, 0x4509D7, 0x451E6F, 0x45B924, 0x45E267, 0x45EEF9, 0x45F563, 0x4632B9, 0x46334F, 0x4637C4, 0x463B57, 0x463FFE, 0x46402E, 0x464258, 0x464324, 0x46438C, 0x466037, 0x46705C, 0x467466, 0x467AF6, 0x467BC4, 0x467CF0, ],
		},
		"ZECL_stdfunc_new_replace": {
			"addr": [ 0x4107D0, 0x41B286, 0x41CBBF, 0x41CC15, 0x41CD60, 0x42044A, 0x423A2A, 0x42445E, 0x425754, 0x42A27F, 0x42A69E, 0x42D785, 0x42FD5C, 0x43029C, 0x43AA1D, 0x43AB22, 0x43AC1C, 0x43ACAA, 0x43BCCB, 0x43BD51, 0x43C7EA, 0x43CAB4, 0x43F682, 0x43F6F6, 0x440FF7, 0x4412BA, 0x4412F9, 0x441355, 0x441372, 0x441698, 0x4416D7, 0x441730, 0x441754, 0x442C09, 0x442CCC, 0x442CF2, 0x442E0C, 0x442E26, 0x44311A, 0x443146, 0x44315C, 0x4433AC, 0x4433DA, 0x443405, 0x4436C8, 0x443833, 0x443852, 0x443BA9, 0x443BC9, 0x44453A, 0x444649, 0x444A6E, 0x444D22, 0x444ED8, 0x44518A, 0x445558, 0x445575, 0x4456A1, 0x445989, 0x4459D0, 0x445FEE, 0x44882A, 0x448F15, 0x449716, 0x449742, 0x44976E, 0x44979A, 0x4497C6, 0x4497F2, 0x44981E, 0x44984A, 0x449876, 0x4498A2, 0x4498CE, 0x4498FA, 0x449956, 0x449982, 0x4499AE, 0x4499DA, 0x449A06, 0x449A32, 0x449A74, 0x449AA0, 0x449ACC, 0x449AF8, 0x449B24, 0x449B90, 0x449BBF, 0x449BF1, 0x449C20, 0x449C4B, 0x449C76, ],
		},
		"ZECL_stdfunc_calloc_replace": {
			"addr": [ 0x45828A, 0x46183A, 0x4618B1, 0x462D92, 0x462DAB, 0x466672, 0x468A2D, 0x468AA6, ],
		},
		"ZECL_stdfunc_realloc_replace": {
			"addr": [ 0x45B8D3, 0x45B8E8, ],
		},
		"ZECL_stdfunc_msize_replace": {
			"addr": 0x45B8A6,
		},
		"ZECL_stdfunc_memcpy_replace": {
			"addr": [ 0x41EFDB, 0x42B834, 0x42B886, 0x42B951, 0x42B9DA, 0x42BA4B, 0x42BABC, 0x45C65E, 0x45CAAC, 0x45E2F7, 0x45E34E, 0x46439F, ],
		},
		"ZECL_stdfunc_memmove_replace": {
			"addr": [ 0x45E5B2, 0x45F949, 0x461CF0, 0x461D3D, 0x465D82, ],
		},
		"ZECL_stdfunc_memset_replace": {
			"addr": [ 0x41EA85, 0x41EB86, 0x42B545, 0x42B6CD, 0x42D977, 0x43A34D, 0x45E201, 0x45E76A, 0x466648, 0x467CCB, 0x467D01, 0x468A01, 0x468BC4, ],
		},
		"ZECL_stdfunc_strlen_replace": {
			"addr": [ 0x41F10F, 0x41F13B, 0x45E5A7, 0x45EF74, 0x45F388, 0x45F39D, 0x45F3C0, 0x463CE6, 0x463CF9, 0x463D1C, 0x463D29, 0x463D8C, 0x463FE6, 0x46401F, 0x465D79, 0x4689B2, ],
		},
		"ZECL_stdfunc_strcpy_replace": {
			"addr": [ 0x42BE09, 0x42BE55, 0x42C2C9, 0x42F462, 0x4359DD, 0x438324, 0x4389A8, 0x45E61C, 0x45F374, 0x45F3DC, 0x463CD2, 0x463D47, 0x46403C, 0x465E9F, 0x468591, 0x4685AE, ],
		},
		"ZECL_stdfunc_strcat_replace": {
			"addr": [ 0x45F3E8, 0x45F3F3, 0x45F3FA, 0x45F401, 0x45F40A, 0x463D4E, 0x463D59, 0x463D65, ],
		},
		"ZECL_stdfunc_strcmp_replace": {
			"addr": 0x461912,
		},
		"ZECL_stdfunc_strncmp_replace": {
			"addr": [ 0x4307C9, 0x43076E, 0x430A0E, ],
		},
		"ZECL_stdfunc_sprintf_replace": {
			"addr": [ 0x4179E6, 0x423FF9, 0x424564, 0x42C6DD, 0x42CD4A, 0x4382BD, 0x438346, 0x438419, 0x438437, 0x44BB2F, 0x44BB47, ],
		},
		"ZECL_stdfunc_ftol2_replace": {
			"addr": [ 0x401791, 0x4017A1, 0x4017B1, 0x4017C1, 0x402766, 0x402776, 0x402786, 0x402796, 0x403080, 0x403090, 0x4030A0, 0x4030B0, 0x4031FA, 0x40320A, 0x40321A, 0x40322A, 0x4033CA, 0x4033DA, 0x4033EA, 0x4033FA, 0x403F4C, 0x4060A0, 0x406129, 0x40B38B, 0x40EBCC, 0x410A84, 0x410A90, 0x416003, 0x4162EB, 0x416FBC, 0x41B137, 0x41B147, 0x41B157, 0x41B167, 0x41B7D4, 0x41B7E7, 0x41B7FA, 0x41B80D, 0x41FB14, 0x41FB35, 0x41FB91, 0x41FBB2, 0x41FC11, 0x41FC32, 0x41FC8E, 0x41FCAF, 0x420298, 0x422755, 0x42277E, 0x422EC4, 0x4232D6, 0x424DA9, 0x424E74, 0x428CC8, 0x42F842, 0x42FCBC, 0x43473F, 0x434BC8, 0x434BDA, 0x434BEC, 0x434BFE, 0x434CC7, 0x434CD9, 0x434CEB, 0x434CFD, 0x434D86, 0x434DB6, 0x434DC8, 0x434DDA, 0x434EA7, 0x434EB9, 0x434ECB, 0x434EDD, 0x434F6C, 0x434F9C, 0x434FAE, 0x434FC0, ],
		},
		
		"ZECL6_enhance_movzx_byte": {
			"addr": [ 0x401155, 0x401198, 0x40121E, 0x40182A, 0x401839, 0x401877, 0x4018A6, 0x4018D2, 0x4027B9, 0x402A19, 0x402F1E, 0x4030D3, 0x40314F, 0x403278, 0x403286, 0x4032CA, 0x4032DC, 0x4032FC, 0x403316, 0x403448, 0x403456, 0x40349A, 0x4034AC, 0x4034CC, 0x4034E6, 0x403BE2, 0x403EE6, 0x403F03, 0x403F2F, 0x404215, 0x4074EC, 0x408D39, 0x408E2C, 0x4097DA, 0x40995E, 0x40A6FE, 0x40A749, 0x40A7B5, 0x40B2E7, 0x40C10D, 0x40C128, 0x40C133, 0x40C14E, 0x40FA2A, 0x40FA8B, 0x40FC74, 0x40FC8B, 0x410B1D, 0x410BE2, 0x410C1B, 0x410C57, 0x410C8E, 0x410D00, 0x410D3C, 0x411BF3, 0x41298D, 0x4129B0, 0x4129D3, 0x412A98, 0x412B16, 0x412B3C, 0x412C16, 0x412C3A, 0x412D33, 0x414239, 0x414488, 0x415B6F, 0x415BDB, 0x4167C9, 0x41682B, 0x4168B1, 0x416937, 0x41699F, 0x416A01, 0x416A86, 0x416B0B, 0x41D599, 0x41D5D4, 0x41E10E, 0x42048C, 0x4206FC, 0x420713,
			// 0x420894, vpatch screws up this one
			0x4208D6, 0x420990, 0x42099B, 0x4209AB, 0x4209F8, 0x420C71, 0x420E92, 0x420F21, 0x422982, 0x422C3E, 0x422D04, 0x422D75, 0x422DF9, 0x422E60, 0x4232B8, 0x426133, 0x42623A, 0x42626A, 0x4268A3, 0x426BD4, 0x428E0D, 0x429758, 0x429765, 0x4299A7, 0x429E21, 0x429FE3, 0x429FEB, 0x42A00D, 0x42A1B2, 0x42A207, 0x42A6BF, 0x42A6C7, 0x42A85C, 0x42A91C, 0x42A933, 0x42A951, 0x42A98B, 0x42AE23, 0x42AEA3, 0x42AEF1, 0x42AF8B, 0x430ABC, 0x430E2D, 0x43128A, 0x4324DA, 0x432510, 0x432571, 0x4325A7, 0x4326AC, 0x4326E2, 0x4328EF, 0x4334A9, 0x43387B, 0x4339BF, 0x4340AE, 0x4340CD, 0x4340D9, 0x4340E6, 0x434102, 0x434137, 0x434162, 0x43431E, 0x4346DC, 0x4346F7, 0x434721, 0x434B74, 0x434BAF, 0x434C54, 0x434C6C, 0x434CAE, 0x434D9D, 0x434E34, 0x434E4C, 0x434E8E, 0x434F83, 0x43CC12, 0x43CC6A, 0x43CCEE, 0x43CD4D, 0x440325, 0x444751, 0x444E20, 0x448429, 0x448576, 0x4486D3, 0x450242, 0x4503DC, 0x450A3A, 0x451D8D, 0x451E4A, 0x45315D, 0x454C13, 0x45CC3C, 0x462661, 0x469040,  ],
			"code": "<nop:1>0FB6",
			"expected": "33??8A"
		},
		"ZECL6_enhance_movzx_word": {
			"addr": [ 0x401BA2, 0x401BAE, 0x401C4B, 0x401C5A, 0x401F5B, 0x401F6B, 0x401F86, 0x401F96, 0x401FBD, 0x401FD8, 0x40211C, 0x40212C, 0x402147, 0x402157, 0x40217E, 0x40219D, 0x40237C, 0x402388, 0x4023A7, 0x4023B3, 0x4023CF, 0x4023DF, 0x40251E, 0x402539, 0x402549, 0x402564, 0x402593, 0x40259F, 0x402BB7, 0x402BC7, 0x402BE2, 0x402BF2, 0x402C16, 0x402C31, 0x402D4E, 0x402D5E, 0x402D79, 0x402D89, 0x402DAD, 0x402DC8, 0x409816, 0x409B6A, 0x40B93E, 0x40B94E, 0x40B9EB, 0x40C202, 0x40C212, 0x40C3EC, 0x40C3FC, 0x40D44F, 0x40D45F, 0x40D5AA, 0x40D5BA, 0x40D614, 0x40D7EA, 0x40D7FA, 0x40D854, 0x40DE52, 0x40DE62, 0x40DF31, 0x40DF41, 0x40E026, 0x40F864, 0x40F873, 0x40F895, 0x40F980, 0x40F98F, 0x40F9B1, 0x410A3A, 0x412AEC, 0x412B33, 0x412B73, 0x413630, 0x4136B0, 0x413747, 0x413A7C, 0x413BBE, 0x413D00, 0x413F54, 0x41400E, 0x41404E, 0x4140D0, 0x41419B, 0x4141AB, 0x4143B3, 0x4147C3, 0x414A3F, 0x414A66, 0x414E8F, 0x414EA3, 0x414F64, 0x414F82, 0x414FB4, 0x4150FA, 0x41512C, 0x4151E4, 0x415252, 0x415367, 0x4153D3, 0x4154DE, 0x41554F, 0x41566D, 0x4157EC, 0x41580A, 0x415970, 0x415A9A, 0x415AAD, 0x415AC2, 0x415AD8, 0x415AEE, 0x415B03, 0x415B3C, 0x415FAC, 0x416293, 0x4167B7, 0x416819, 0x41689F, 0x416925, 0x41698D, 0x4169EF, 0x416A74, 0x416AF9, 0x416B59, 0x416C59, 0x41D085, 0x41D0A3, 0x41D0B1, 0x41D39B, 0x41D3DA, 0x41D5BF, 0x41D642, 0x41E78C, 0x41F70D, 0x41F948, 0x41F9D0, 0x41FE26, 0x41FE39, 0x41FE93, 0x41FF89, 0x4278BB, 0x4278DB, 0x427922, 0x427942, 0x427986, 0x4279A9, 0x427A10, 0x427A45, 0x427A7E, 0x427AB7, 0x427B2A, 0x427B68, 0x42899C, 0x4289A8, 0x428B72, 0x42A228, 0x42A486, 0x42A4A8, 0x42A5A9, 0x42A5BE, 0x42A5D6, 0x42A5DF, 0x42A5F9, 0x42A61C, 0x430C42, 0x43AF69, 0x43B028, 0x43B6B6, 0x43B714, 0x4466E2, 0x448114, 0x4481B6, 0x448B48, 0x448B75, 0x44EAFB, 0x44EC83, 0x45416E, 0x454272, 0x455D3D, 0x4582E5, 0x4582F6, 0x45830A, 0x4585FC, 0x458602, 0x45860C, 0x458614, 0x458879, 0x45887F, 0x45888B, 0x458893, 0x45889B, 0x4588A3, 0x45F1E2, 0x465D96, 0x468CB0, ],
			"code": "<nop:2>0FB7",
			"expected": "33??668B",
		},
		"ZECL6_enhance_movzx_byte_special": {
			"addr": [ 0x401146, 0x401205, 0x401293, 0x401DBB, 0x4026DF, 0x402751, 0x402879, 0x4028DB, 0x403009, 0x40306B, 0x409957, 0x40B2EF, 0x40C103, 0x40C159, 0x410B16, 0x410BEA, 0x410C04, 0x411BC9, 0x416773, 0x42063D, 0x420709, 0x4209EE, 0x420A8A, 0x420DC0, 0x420EC3, 0x420F76, 0x421FF7, 0x429E1A, 0x42A006, 0x42A474, 0x42A513, 0x42A573, ],
			"code": "0FB605",
			"expected": "33C0A0"
		},
		"ZECL6_enhance_movzx_word_special": {
			"addr": [ 0x401B8F, 0x401C36, 0x401F77, 0x401FA2, 0x401FCD, 0x402138, 0x402163, 0x402192, 0x40236D, 0x402398, 0x4023EB, 0x40252E, 0x402559, 0x402580, 0x402BD3, 0x402BFE, 0x402C26, 0x402D6A, 0x402D95, 0x402DBD, 0x40F853, 0x40F96F, 0x4102F8, 0x41D066, 0x41D3BB, 0x41D3E8, 0x41FA0F, 0x41FA6B, 0x41FD78, 0x41FE01, 0x426106, 0x42789C, 0x427903, 0x427967, 0x427AEC, 0x427BA2, 0x42814A, 0x4285B5, 0x428989, 0x428B5A, 0x42A5EC, ],
			"code": "<nop:1>0FB705",
			"expected": "33C066A1"
		},
		"ZECL_enhance_fstp0_to_ffreep0": {
			"addr": [ 0x43EFBA, 0x43F11E, 0x43F12B, 0x43F15F, 0x43F224, 0x440E17, 0x440FE4, 0x440FF2, 0x440FF5, 0x441077, 0x441116, 0x4411A0, 0x4414AA, 0x441915, 0x443295, 0x4432A9, 0x443639, 0x443659, 0x44377D, 0x443954, 0x443990, 0x4439E5, 0x443A28, 0x443A4B, 0x443D46, 0x443D91, 0x443DE9, 0x443E3A, 0x443E8E, 0x443EEC, 0x443F37, 0x443F7D, 0x443FB9, 0x44401F, 0x444079, 0x44663C, 0x4466A4, 0x446739, 0x4467B2, 0x446830, 0x44689A, 0x446938, 0x446AAC, 0x446C78, 0x446D44, 0x446E3D, 0x446F14, 0x446FEB, 0x4470C2, 0x4471B5, 0x4472AA, 0x447401, 0x4474FA, 0x4476EB, 0x44783D, 0x44790C, 0x4479B5, 0x447A72, 0x447B51, 0x447C3D, 0x447D3C, 0x447DFA, 0x447EE0, 0x447F82, 0x44801A, 0x4480BD, 0x44815F, 0x44820F, 0x4482BE, 0x448360, 0x448484, 0x448523, 0x448705, 0x44878E, 0x448C19, 0x448C28, 0x448C89, 0x448CB7, 0x448CC6, 0x448D35, 0x44E2BB, 0x44E303, 0x44E339, 0x44E464, 0x44E4E7, 0x44E4F5, 0x44E4F8, 0x44E682, 0x44E6A3, 0x44E77D, 0x44E7A9, 0x44E7D5, 0x44E7E8, 0x44E859, 0x44E863, 0x44E8C6, 0x44E8E1, 0x44E8E6, 0x44E951, 0x44E968, 0x44E977, 0x44E99B, 0x44E9AA, 0x458939, 0x458A08, 0x458A2F, 0x458B4E, 0x458C13, 0x458C16, 0x45BCAE, 0x45BD62, 0x45BE12, 0x45C4EA, 0x45C51D, 0x45C536, 0x45D99E, 0x45D9BF, 0x45DF36, 0x45DF84, 0x45DFD7, 0x46023A, 0x460244, 0x460246, 0x46024B, 0x46024D, 0x4602E6, 0x4602E8, 0x46056C, 0x460575, 0x46057B, 0x460586, 0x460591, 0x460598, 0x460922, 0x46111A, 0x4611AC, 0x4611BA, 0x461213, 0x4612CE, 0x4613D2, 0x461464, 0x461472, 0x4614CB, 0x461589, 0x462AAC, 0x465448, 0x46544A, 0x46547B, 0x4654D2, 0x4654D9, 0x4654F4, 0x46550F, 0x465511, 0x465525, ],
		},
		"ZECL_enhance_fstp0fstp0_to_ffreep1fincstp": {
			"addr": [ 0x43EFA1, 0x43EFC4, 0x43F0F3, 0x440D50, 0x440DC5, 0x441188, 0x448D37, 0x44E2BD, 0x44E305, 0x44E33B, 0x44E9E5, 0x44E9E9, 0x45896F, 0x4589C9, 0x458A31, 0x458AC1, 0x458B23, 0x45DF9E, 0x4654A2, ]
		},
	}
}