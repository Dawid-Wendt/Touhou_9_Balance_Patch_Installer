{
	"options": {
		// ECL
		"zecl_lins_jump_addr": { "val": 0x417838 },
		"zecl_lins_jump_base_count": { "val": 161 },
		"zecl_lins_jump_new_count": { "val": 20 },
		// Timelines
		"zecl_hins_jump_addr": { "val": 0x41FD2F },
		"zecl_hins_jump_base_count": { "val": 13 },
		"zecl_hins_jump_new_count": { "val": 1 },
		// Int Vars
		"zecl_ivar_jump_addr": { "val": 0x40EACE },
		"zecl_ivar_jump_base_count": { "val": 74 },
		"zecl_ivar_jump_new_count": { "val": 1 },
		// Int Ptrs
		"zecl_iptr_jump_addr": { "val": 0x40ED45 },
		"zecl_iptr_jump_base_count": { "val": 23 },
		"zecl_iptr_jump_new_count": { "val": 1 },
		"zecl_iptr_case_addr": { "val": 0x40EDA1 },
		"zecl_iptr_case_base_count": { "val": 72 },
		"zecl_iptr_case_new_count": { "val": 3 },
		// Float Vars
		"zecl_fvar_jump_addr": { "val": 0x40F28A },
		"zecl_fvar_jump_base_count": { "val": 74 },
		"zecl_fvar_jump_new_count": { "val": 1 },
		// Float Ptrs
		"zecl_fptr_jump_addr": { "val": 0x40F5D0 },
		"zecl_fptr_jump_base_count": { "val": 38 },
		"zecl_fptr_jump_new_count": { "val": 0 },
		"zecl_fptr_case_addr": { "val": 0x40F668 },
		"zecl_fptr_case_base_count": { "val": 70 },
		"zecl_fptr_case_new_count": { "val": 0 },
		
		"ecl_lins_break_addr": {
			"type": "u32",
			"val": 0x41677B
		},
		"ecl_lins_continue_addr": {
			"type": "u32",
			"val": 0x41069A
		},
		"ecl_hins_break_addr": {
			"type": "u32",
			"val": 0x41FCED
		},
		"ecl_hins_continue_addr": {
			"type": "u32",
			"val": 0x41F6FC
		},
		"ecl_ivar_break_addr": {
			"type": "u32",
			"val": 0x40EACA
		},
		"ecl_iptr_break_addr": {
			"type": "u32",
			"val": 0x40ED3F
		},
		"ecl_fvar_break_addr": {
			"type": "u32",
			"val": 0x40F284
		},
		"ecl_fptr_break_addr": {
			"type": "u32",
			"val": 0x40F5CA
		},
		
		"ecl_get_int_var_addr": {
			"type": "u32",
			"val": 0x40E5B0
		},
		"ecl_get_int_ptr_addr": {
			"type": "u32",
			"val": 0x40EC00
		},
		"ecl_get_float_var_addr": {
			"type": "u32",
			"val": 0x40EDF0
		},
		"ecl_get_float_ptr_addr": {
			"type": "u32",
			"val": 0x40F3C0
		},
		
		"stdfunc_free_addr": { "val": 0x47D285 },
		"stdfunc_delete_addr": { "val": 0x47D43C },
		"stdfunc_malloc_addr": { "val": 0x47D39D },
		"stdfunc_new_addr": { "val": 0x47D441 },
		"stdfunc_calloc_addr": { "val": 0 },
		"stdfunc_realloc_addr": { "val": 0 },
		"stdfunc_msize_addr": { "val": 0 },
		"stdfunc_memcpy_addr": { "val": 0 },
		"stdfunc_memmove_addr": { "val": 0 },
		"stdfunc_memset_addr": { "val": 0x47DBF0 },
		"stdfunc_strlen_addr": { "val": 0x47DB60 },
		"stdfunc_strcpy_addr": { "val": 0x47DDC0 },
		"stdfunc_strcat_addr": { "val": 0x47DDD0 },
		"stdfunc_strcmp_addr": { "val": 0 },
		"stdfunc_strncmp_addr": { "val": 0 },
		"stdfunc_sprintf_addr": { "val": 0x47D44F },
		"stdfunc_sscanf_addr": { "val": 0 },
		"stdfunc_ftol2_addr": { "val": 0x48B8A0 },
	},
	"codecaves": {
		"ZECL_low_ins_jump_table": {
			"code": "\
<codecave:ZECL7_debug_breakpoint> \
<codecave:ZECL7_thcrap_expr> \
<codecave:ZECL7_set_int_pun> \
<codecave:ZECL7_set_float_pun> \
<codecave:ZECL7_math_bit_and> \
<codecave:ZECL7_math_bit_or> \
<codecave:ZECL7_math_bit_xor> \
<codecave:ZECL7_math_bit_neg> \
<codecave:ZECL7_math_shl> \
<codecave:ZECL7_math_shr> \
<codecave:ZECL7_math_sar> \
<codecave:ZECL7_math_rol> \
<codecave:ZECL7_math_ror> \
<codecave:ZECL7_math_udiv> \
<codecave:ZECL7_math_umod> \
<codecave:ZECL7_math_int_neg> \
<codecave:ZECL7_math_float_neg> \
<codecave:ZECL7_set_int_indirect> \
<codecave:ZECL7_set_float_indirect> \
<codecave:ZECL7_inline_switch> \
"
		},
		"ZECL_high_ins_jump_table": {
			"code": "\
<codecave:ZECL7_timeline_goto> \
"
		},
		"ZECL_int_var_jump_table": {
			"code": "\
<codecave:ZECL7_compare_register_int_var> \
"
		},
		"ZECL_int_ptr_jump_table": {
			"code": "\
<codecave:ZECL7_compare_register_int_ptr> \
"
		},
		"ZECL_int_ptr_case_table": {
			"code": "16 16 17"
		},
		"ZECL_float_var_jump_table": {
			"code": "\
<codecave:ZECL7_compare_register_float_var> \
"
		},
		// Memory locations:
		// current_instruction	[EBP-8]
		// enemy				[EBP+8]
		// int scratch			[EBP-4]
		// float scratch		[EBP-C]
		//
		// Available registers:
		// Default: ESI, EDI
		// Patched: EBX
		//
		// Notes:
		// -Relies on ecl_get_int_var/ecl_get_float_var not modifying stack args
		"ZECL7_debug_breakpoint": {
			"access": "re",
			"code": "\
CC \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL7_thcrap_expr": {
			"access": "re",
			"code": "\
8B75 F8 \
8B7D 08 \
8D56 0C \
0FB746 0A \
89F9 \
6A 00 \
50 \
E8 [<option:ecl_get_int_ptr_addr>] \
8D4E 10 \
31D2 \
6A 00 \
6A 00 \
6A 00 \
50 \
E8 [eval_expr] \
31C9 \
85C0 \
0F94C1 \
898F F0080000 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL7_set_int_pun": {
			"access": "re",
			"code": "\
8B75 F8 \
8B7D 08 \
8D56 0C \
0FB746 0A \
6A 00 \
50 \
89F9 \
E8 [<option:ecl_get_int_ptr_addr>] \
8B56 10 \
F646 0A 02 \
74 11 \
52 \
89C6 \
89F9 \
E8 [<option:ecl_get_float_var_addr>] \
D91E \
E9 [<option:ecl_lins_break_addr>] \
8910 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL7_set_float_pun": {
			"access": "re",
			"code": "\
8B75 F8 \
8B7D 08 \
8D56 0C \
0FB746 0A \
89F9 \
6A 00 \
50 \
E8 [<option:ecl_get_float_ptr_addr>] \
8B56 10 \
F646 0A 02 \
74 10 \
89C6 \
89F9 \
E8 [<option:ecl_get_int_var_addr>] \
8906 \
E9 [<option:ecl_lins_break_addr>] \
8910 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL7_math_bit_and": {
			"access": "re",
			"code": "\
8B75 F8 \
8B7D 08 \
8B5E 10 \
0FB74E 0A \
F6C1 02 \
74 0F \
89F9 \
89DA \
E8 [<option:ecl_get_int_var_addr>] \
89C3 \
0FB74E 0A \
8B46 14 \
F6C1 04 \
74 0D \
89F9 \
89C2 \
E8 [<option:ecl_get_int_var_addr>] \
0FB74E 0A \
21C3 \
83C6 0C \
6A 00 \
51 \
89F9 \
89F2 \
E8 [<option:ecl_get_int_ptr_addr>] \
8918 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL7_math_bit_or": {
			"access": "re",
			"code": "\
8B75 F8 \
8B7D 08 \
8B5E 10 \
0FB74E 0A \
F6C1 02 \
74 0F \
89F9 \
89DA \
E8 [<option:ecl_get_int_var_addr>] \
89C3 \
0FB74E 0A \
8B46 14 \
F6C1 04 \
74 0D \
89F9 \
89C2 \
E8 [<option:ecl_get_int_var_addr>] \
0FB74E 0A \
09C3 \
83C6 0C \
6A 00 \
51 \
89F9 \
89F2 \
E8 [<option:ecl_get_int_ptr_addr>] \
8918 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL7_math_bit_xor": {
			"access": "re",
			"code": "\
8B75 F8 \
8B7D 08 \
8B5E 10 \
0FB74E 0A \
F6C1 02 \
74 0F \
89F9 \
89DA \
E8 [<option:ecl_get_int_var_addr>] \
89C3 \
0FB74E 0A \
8B46 14 \
F6C1 04 \
74 0D \
89F9 \
89C2 \
E8 [<option:ecl_get_int_var_addr>] \
0FB74E 0A \
31C3 \
83C6 0C \
6A 00 \
51 \
89F9 \
89F2 \
E8 [<option:ecl_get_int_ptr_addr>] \
8918 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL7_math_bit_neg": {
			"access": "re",
			"code": "\
8B75 F8 \
8B7D 08 \
8B5E 10 \
0FB746 0A \
A8 02 \
74 0F \
89F9 \
89DA \
E8 [<option:ecl_get_int_var_addr>] \
89C3 \
0FB746 0A \
F7D3 \
83C6 0C \
89F9 \
89F2 \
6A 00 \
50 \
E8 [<option:ecl_get_int_ptr_addr>] \
8918 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL7_math_shl": {
			"access": "re",
			"code": "\
8B75 F8 \
8B7D 08 \
8B5E 10 \
0FB746 0A \
A8 02 \
74 0F \
89F9 \
89DA \
E8 [<option:ecl_get_int_var_addr>] \
89C3 \
0FB746 0A \
8B4E 14 \
A8 04 \
74 0F \
89CA \
89F9 \
E8 [<option:ecl_get_int_var_addr>] \
89C1 \
0FB746 0A \
D3E3 \
83C6 0C \
89F9 \
89F2 \
6A 00 \
50 \
E8 [<option:ecl_get_int_ptr_addr>] \
8918 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL7_math_shr": {
			"access": "re",
			"code": "\
8B75 F8 \
8B7D 08 \
8B5E 10 \
0FB746 0A \
A8 02 \
74 0F \
89F9 \
89DA \
E8 [<option:ecl_get_int_var_addr>] \
89C3 \
0FB746 0A \
8B4E 14 \
A8 04 \
74 0F \
89CA \
89F9 \
E8 [<option:ecl_get_int_var_addr>] \
89C1 \
0FB746 0A \
D3EB \
83C6 0C \
89F9 \
89F2 \
6A 00 \
50 \
E8 [<option:ecl_get_int_ptr_addr>] \
8918 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL7_math_sar": {
			"access": "re",
			"code": "\
8B75 F8 \
8B7D 08 \
8B5E 10 \
0FB746 0A \
A8 02 \
74 0F \
89F9 \
89DA \
E8 [<option:ecl_get_int_var_addr>] \
89C3 \
0FB746 0A \
8B4E 14 \
A8 04 \
74 0F \
89CA \
89F9 \
E8 [<option:ecl_get_int_var_addr>] \
89C1 \
0FB746 0A \
D3F3 \
83C6 0C \
89F9 \
89F2 \
6A 00 \
50 \
E8 [<option:ecl_get_int_ptr_addr>] \
8918 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL7_math_rol": {
			"access": "re",
			"code": "\
8B75 F8 \
8B7D 08 \
8B5E 10 \
0FB746 0A \
A8 02 \
74 0F \
89F9 \
89DA \
E8 [<option:ecl_get_int_var_addr>] \
89C3 \
0FB746 0A \
8B4E 14 \
A8 04 \
74 0F \
89CA \
89F9 \
E8 [<option:ecl_get_int_var_addr>] \
89C1 \
0FB746 0A \
D3C3 \
83C6 0C \
89F9 \
89F2 \
6A 00 \
50 \
E8 [<option:ecl_get_int_ptr_addr>] \
8918 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL7_math_ror": {
			"access": "re",
			"code": "\
8B75 F8 \
8B7D 08 \
8B5E 10 \
0FB746 0A \
A8 02 \
74 0F \
89F9 \
89DA \
E8 [<option:ecl_get_int_var_addr>] \
89C3 \
0FB746 0A \
8B4E 14 \
A8 04 \
74 0F \
89CA \
89F9 \
E8 [<option:ecl_get_int_var_addr>] \
89C1 \
0FB746 0A \
D3CB \
83C6 0C \
89F9 \
89F2 \
6A 00 \
50 \
E8 [<option:ecl_get_int_ptr_addr>] \
8918 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL7_math_udiv": {
			"access": "re",
			"code": "\
8B75 F8 \
8B7D 08 \
8B5E 10 \
0FB74E 0A \
F6C1 02 \
74 0F \
89F9 \
89DA \
E8 [<option:ecl_get_int_var_addr>] \
89C3 \
0FB74E 0A \
8B46 14 \
F6C1 04 \
74 0D \
89F9 \
89C2 \
E8 [<option:ecl_get_int_var_addr>] \
0FB74E 0A \
93 \
31D2 \
F7F3 \
89C3 \
83C6 0C \
6A 00 \
51 \
89F9 \
89F2 \
E8 [<option:ecl_get_int_ptr_addr>] \
8918 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL7_math_umod": {
			"access": "re",
			"code": "\
8B75 F8 \
8B7D 08 \
8B5E 10 \
0FB74E 0A \
F6C1 02 \
74 0F \
89F9 \
89DA \
E8 [<option:ecl_get_int_var_addr>] \
89C3 \
0FB74E 0A \
8B46 14 \
F6C1 04 \
74 0D \
89F9 \
89C2 \
E8 [<option:ecl_get_int_var_addr>] \
0FB74E 0A \
93 \
31D2 \
F7F3 \
89D3 \
83C6 0C \
6A 00 \
51 \
89F9 \
89F2 \
E8 [<option:ecl_get_int_ptr_addr>] \
8918 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL7_math_int_neg": {
			"access": "re",
			"code": "\
8B75 F8 \
8B7D 08 \
8B5E 10 \
0FB746 0A \
A8 02 \
74 0F \
89F9 \
89DA \
E8 [<option:ecl_get_int_var_addr>] \
89C3 \
0FB746 0A \
F7DB \
83C6 0C \
89F9 \
89F2 \
6A 00 \
50 \
E8 [<option:ecl_get_int_ptr_addr>] \
8918 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL7_math_float_neg": {
			"access": "re",
			"code": "\
8B75 F8 \
8B7D 08 \
8D56 0C \
0FB75E 0A \
89F9 \
6A 00 \
53 \
E8 [<option:ecl_get_float_ptr_addr>] \
D946 10 \
89C6 \
F6C3 02 \
74 0D \
83EC 04 \
D91CE4 \
89F9 \
E8 [<option:ecl_get_float_var_addr>] \
D9E0 \
D91E \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL7_set_int_indirect": {
			"access": "re",
			"code": "\
8B75 F8 \
8B7D 08 \
8B56 10 \
0FB75E 0A \
F6C3 02 \
74 09 \
89F9 \
E8 [<option:ecl_get_int_var_addr>] \
89C2 \
83C6 0C \
89F9 \
E8 [<option:ecl_get_int_var_addr>] \
89F9 \
89F2 \
6A 00 \
53 \
89C3 \
E8 [<option:ecl_get_int_ptr_addr>] \
8918 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL7_set_float_indirect": {
			"access": "re",
			"code": "\
8B75 F8 \
8B7D 08 \
FF76 10 \
0FB75E 0A \
F6C3 02 \
74 0D \
89F9 \
E8 [<option:ecl_get_float_var_addr>] \
83EC 04 \
D91CE4 \
83C6 0C \
89F9 \
E8 [<option:ecl_get_float_var_addr>] \
83EC 04 \
D91CE4 \
89F9 \
89F2 \
6A 00 \
53 \
E8 [<option:ecl_get_float_ptr_addr>] \
8F00 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL7_inline_switch": {
			"access": "re",
			"code": "\
8B75 F8 \
8B7D 08 \
8B46 0C \
F641 0A 01 \
74 09 \
89F9 \
89C2 \
E8 [<option:ecl_get_int_var_addr>] \
3B46 10 \
BA FFFFFFFF \
0F46D0 \
8B44D6 1C \
8987 F0060000 \
0374D6 20 \
8975 F8 \
E9 [<option:ecl_lins_continue_addr>] \
"
		},
		"ZECL7_timeline_goto": {
			"access": "re",
			"code": "\
8B45 80 \
8B48 0C \
0FBF11 \
8950 08 \
0349 08 \
8948 0C \
E9 [<option:ecl_hins_continue_addr>] \
"
		},
		"ZECL7_compare_register_int_var": {
			"access": "re",
			"code": "\
8B45 D8 \
8B80 F0080000 \
E9 [<option:ecl_ivar_break_addr>] \
"
		},
		"ZECL7_compare_register_int_ptr": {
			"access": "re",
			"code": "\
B8 F0080000 \
0345 FC \
E9 [<option:ecl_iptr_break_addr>] \
"
		},
		"ZECL7_compare_register_float_var": {
			"access": "re",
			"code": "\
8B45 D8 \
DB80 F0080000 \
E9 [<option:ecl_fvar_break_addr>] \
"
		},
	},
	"binhacks": {
		"ZECL7_run_ecl_EBX_push": {
			"addr": 0x41053D,
			"code": "53 89C2",
			"expect": "8B55 08"
		},
		"ZECL7_run_ecl_EBX_pop": {
			"addr": 0x417830,
			"code": "5B 5F 5E C9 C2 0400 CC",
			"expect": "5F 5E 8BE5 5D C2 0400"
		},
		
		"ZECL_low_ins_jump_table_replace": {
			"addr": 0x41073D
		},
		"ZECL_low_ins_max_replace": {
			"enable": "<option:zecl_lins_jump_new_count>",
			"addr": 0x41072A,
			"code": "(<option:zecl_lins_jump_base_count> + <option:zecl_lins_jump_new_count> - 1)",
			"expect": "(<option:zecl_lins_jump_base_count> - 1)",
		},
		"ZECL_high_ins_jump_table_replace": {
			"addr": 0x41F74F
		},
		"ZECL_high_ins_max_replace": {
			"enable": "<option:zecl_hins_jump_new_count>",
			"addr": 0x41F73F,
			"code": "(u8:<option:zecl_hins_jump_base_count> + <option:zecl_hins_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_hins_jump_base_count> - 1)"
		},
		"ZECL_int_var_jump_table_replace": {
			"addr": 0x40E5DE,
		},
		"ZECL_int_var_max_replace": {
			"enable": "<option:zecl_ivar_jump_new_count>",
			"addr": 0x40E5D1,
			"code": "(u8:<option:zecl_ivar_jump_base_count> + <option:zecl_ivar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_ivar_jump_base_count> - 1)",
		},
		"ZECL_int_ptr_jump_table_replace": {
			"addr": 0x40EC59
		},
		"ZECL_int_ptr_case_table_replace": {
			"addr": 0x40EC52
		},
		"ZECL_int_ptr_max_replace": {
			"enable": "<option:zecl_iptr_case_new_count>",
			"addr": 0x40EC45,
			"code": "(u8:<option:zecl_iptr_case_base_count> + <option:zecl_iptr_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_iptr_case_base_count> - 1)",
		},
		"ZECL_float_var_jump_table_replace": {
			"addr": 0x40EE1F,
		},
		"ZECL_float_var_max_replace": {
			"enable": "<option:zecl_fvar_jump_new_count>",
			"addr": 0x40EE12,
			"code": "(u8:<option:zecl_fvar_jump_base_count> + <option:zecl_fvar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_fvar_jump_base_count> - 1)",
		},
		"ZECL_float_ptr_jump_table_replace": {
			"addr": 0x40F41E
		},
		"ZECL_float_ptr_case_table_replace": {
			"addr": 0x40F417
		},
		"ZECL_float_ptr_max_replace": {
			"enable": "<option:zecl_fptr_case_new_count>",
			"addr": 0x40F40A,
			"code": "(u8:<option:zecl_fptr_case_base_count> + <option:zecl_fptr_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_fptr_case_base_count> - 1)",
		},
		
		"ZECL7_FixLaserBlend_A": {
			"addr": 0x4265E8,
			"code": "\
3D FF000000 \
B9 FF000000 \
0F4CC8 \
8B55 D8 \
888A BB010000 \
E9 [0x4266C8] \
<nop:12> \
",
		},
		"ZECL7_FixLaserBlend_B": {
			"addr": 0x4268B4,
			"code": "DA81 C8040000",
		},
		"ZECL7_FixLaserBlend_C": {
			"addr": 0x4268BF,
			"code": "\
8D90 01FFFFFF \
F7DA \
31C9 \
3D FF000000 \
0F4CCA \
8B45 D8 \
8888 BB010000 \
EB 6A \
<nop:7> \
"
		},
		
		"ZECL_stdfunc_free_replace": {
			"addr": [ 0x40746E, 0x40749B, 0x40E50D, 0x41E578, 0x41E7CD, 0x429A21, 0x42E971, 0x435F91, 0x4366DD, 0x436743, 0x43675D, 0x436C6B, 0x436C77, 0x4370ED, 0x4370F9, 0x438DFF, 0x4398A0, 0x4398A9, 0x439A0D, 0x43B46C, 0x442988, 0x4429B0, 0x4431E8, 0x443214, 0x44352F, 0x443540, 0x443A44, 0x443A62, 0x444202, 0x44446A, 0x44449F, 0x44481E, 0x444C10, 0x444C5C, 0x444CA5, 0x444DD4, 0x44551B, 0x445524, 0x445A4F, 0x447601, 0x44A2D5, 0x44BA33, 0x44BA6A, 0x44BDA5, 0x44BE00, 0x44BE54, 0x44BEC1, 0x44BF20, 0x44BF6A, 0x44BFDC, 0x44C33A, 0x44D9B5, 0x44DF03, 0x44DF2C, 0x44E67F, 0x44E75F, 0x4549CD, 0x4549F6, 0x455BF4, 0x45AAD6, 0x45ABC0, 0x45B251, 0x45B438, 0x45C4FD, 0x472255, 0x4722A3, 0x479B22, 0x47D43C, 0x47E45E, 0x4803B6, 0x48042B, 0x480742, 0x4807E3, 0x4807F8, 0x481425, 0x481448, 0x48145A, 0x481462, 0x48147D, 0x481485, 0x4814AC, 0x4814B4, 0x482205, 0x4822B1, 0x4823AF, 0x482FFD, 0x483022, 0x4832F2, 0x486C1B, 0x486C8C, 0x486CAD, 0x486CB5, 0x486CBD, 0x486CC5, 0x486CCD, 0x486CD5, 0x486CDC, 0x486CE4, 0x486CEC, 0x486CF4, 0x486CFC, 0x486D04, 0x486D0C, 0x486D14, 0x486D1C, 0x486D24, 0x486D2F, 0x486D37, 0x486D3F, 0x486D47, 0x486D4F, 0x486D57, 0x486D5F, 0x486D67, 0x486D6F, 0x486D77, 0x486D7F, 0x486D87, 0x486D8F, 0x486D97, 0x486D9F, 0x486DA7, 0x486DB5, 0x486DC0, 0x486DCB, 0x486DD6, 0x486DE1, 0x486DEC, 0x486DF7, 0x486E02, 0x486E0D, 0x486E18, 0x486E23, 0x486E4B, 0x486E68, 0x486E84, 0x486EB0, 0x486ECD, 0x486EEA, 0x486F07, 0x486F24, 0x486F41, 0x486F5D, 0x4874A3, 0x487799, 0x487CD3, 0x487CE1, 0x487E17, 0x487E41, 0x489A98, 0x489E07, 0x489E28, 0x48AC4B, 0x48B098, 0x48B0A7, 0x48B122, 0x48B152, 0x48B15A, 0x48B2F3, 0x48B3AF, 0x48B3BE, 0x48B3CD, 0x48B7CF, ],
		},
		"ZECL_stdfunc_delete_replace": {
			"addr": [ 0x41E7FA, 0x42D125, 0x42E8BB, 0x42E8DD, 0x43001A, 0x43023A, 0x4342CD, 0x4360D3, 0x438E83, 0x438F5D, 0x438F7E, 0x438FD2, 0x43B48C, 0x443A76, 0x44A2E8, 0x44B2FB, 0x44B66F, 0x44B9D3, 0x456146, 0x45BF32, 0x45BF66, 0x45C528, 0x45C5C2, 0x45C9B2, 0x45CB40, 0x45CB82, 0x45CE52, 0x45CE94, 0x45D04D, 0x45D0E5, 0x45D25E, 0x45D29D, 0x45D344, 0x45D38C, 0x45DA9D, 0x45E53E, 0x45E5AD, 0x45F909, 0x45F944, 0x463132, 0x463147, 0x463721, 0x463744, 0x463759, 0x463770, 0x463779, 0x463781, 0x463789, 0x463790, 0x463BF0, 0x463C13, 0x463C28, 0x463C40, 0x463C49, 0x463C51, 0x463C59, 0x463C61, 0x463C68, 0x464E59, 0x464EFB, 0x464FCC, 0x464FD4, 0x465031, 0x465162, 0x46516A, 0x4654CE, 0x4654D9, 0x465894, 0x46589F, 0x465C97, 0x465C9F, 0x465CA7, 0x465CAF, 0x4662DC, 0x4662E4, 0x4662EC, 0x4662F4, 0x4662FC, 0x466451, 0x466465, 0x46647B, 0x466491, 0x4679BB, 0x467DB2, 0x467DC5, 0x467DDA, 0x467DEF, 0x46841D, 0x46AEA5, 0x46AEE1, 0x46AF2D, 0x46B56F, 0x46B58B, 0x46B5A7, 0x46B5C8, 0x48C3B7, 0x48C3C1, 0x48C3CB, 0x48C3D5, 0x48C3DF, 0x48C3E9, 0x48C3F3, 0x48C454, 0x48C4B4, 0x48C4D4, 0x48C4F4, 0x48C514, 0x48C51F, 0x48C534, 0x48C53F, 0x48C57C, 0x48C587, 0x48C59B, 0x48C5AF, 0x48C5C3, 0x48C5CD, ],
		},
		"ZECL_stdfunc_malloc_replace": {
			"addr": [ 0x407730, 0x42E91B, 0x4313FB, 0x431491, 0x436872, 0x43691C, 0x437015, 0x437061, 0x439689, 0x4396C9, 0x443227, 0x443247, 0x4434B0, 0x443E60, 0x444572, 0x444BB6, 0x444C6C, 0x444D9A, 0x444EDF, 0x445543, 0x44C3F9, 0x472226, 0x47226E, 0x473706, 0x47D218, 0x47E402, 0x48006F, 0x480418, 0x4807A9, 0x481C72, 0x4822BF, 0x48285E, 0x482FA9, 0x482FD9, 0x483203, 0x4832CF, 0x483337, 0x48336C, 0x483402, 0x486676, 0x4876FC, 0x487BB0, 0x487C7E, 0x487DAA, 0x48A19F, 0x48AFBF, 0x48B052, 0x48B1EA, 0x48B2A3, 0x48B2BE, 0x48B36F, 0x48B7F8, ],
		},
		"ZECL_stdfunc_new_replace": {
			"addr": [ 0x41E840, 0x42D188, 0x42E928, 0x42E93F, 0x42FF0F, 0x42FF65, 0x4300B0, 0x434119, 0x436040, 0x438BD7, 0x438D79, 0x43AEE1, 0x443070, 0x443AD0, 0x44A317, 0x44B32D, 0x44B5BB, 0x4556BC, 0x45BF41, 0x45BF78, 0x45C5E5, 0x45C933, 0x45CA99, 0x45CB93, 0x45CC90, 0x45CDAB, 0x45CEA5, 0x45CF6A, 0x45D10F, 0x45D1B7, 0x45F749, 0x45FE18, 0x4631F2, 0x4634B5, 0x4634F4, 0x463550, 0x46356D, 0x463893, 0x4638D2, 0x46392B, 0x46394F, 0x464E04, 0x464EC7, 0x464EED, 0x465007, 0x465021, 0x465315, 0x465341, 0x465357, 0x4655A7, 0x4655D5, 0x465600, 0x4658C3, 0x465A2E, 0x465A4D, 0x465DA4, 0x465DC4, 0x466735, 0x466844, 0x466C4B, 0x466EFF, 0x4670B5, 0x467367, 0x467741, 0x46775E, 0x46788A, 0x467B72, 0x467BB9, 0x46A0AF, 0x46A79A, 0x46AF9B, 0x46AFC7, 0x46AFF3, 0x46B01F, 0x46B04B, 0x46B077, 0x46B0A3, 0x46B0CF, 0x46B0FB, 0x46B127, 0x46B153, 0x46B17F, 0x46B1DB, 0x46B207, 0x46B233, 0x46B25F, 0x46B28B, 0x46B2B7, 0x46B2F9, 0x46B325, 0x46B351, 0x46B37D, 0x46B3A9, 0x46B415, 0x46B444, 0x46B476, 0x46B4A5, 0x46B4D0, 0x46B4FB, ],
		},
		
		"ZECL_stdfunc_memset_replace": {
			"addr": [ 0x431B4F, 0x431C50, 0x444B3F, 0x4451DB, 0x445369, 0x4554C9, 0x45C623, 0x47FA76, 0x481CA1, 0x483892, 0x486BAE, 0x487D85, 0x487DBB, 0x489D3D, ],
		},
		"ZECL_stdfunc_strlen_replace": {
			"addr": [ 0x432375, 0x432398, 0x4323B9, 0x4323DC, 0x43240F, 0x432432, 0x432455, 0x432478, 0x4324A7, 0x47DC93, 0x4800EA, 0x4822B8, 0x482C91, 0x482CA4, 0x482CC7, 0x482CD4, 0x482D37, 0x482F91, 0x482FCA, 0x4836CF, 0x487A53, 0x487A5E, 0x487F50, 0x487F65, 0x487F88, 0x48863A, 0x489CEE, 0x48B367, 0x48B7F1, ],
		},
		"ZECL_stdfunc_strcpy_replace": {
			"addr": [ 0x445871, 0x446BFD, 0x446CB6, 0x44713F, 0x447156, 0x447CC2, 0x449D76, 0x449DAB, 0x44A01D, 0x44A12B, 0x455AD6, 0x45AAA2, 0x45B3BA, 0x4822D1, 0x482C7D, 0x482CF2, 0x482FE7, 0x483744, 0x487F3C, 0x487FA4, 0x488760, 0x48AA59, 0x48AA76, 0x48B380, 0x48B805, ],
		},
		"ZECL_stdfunc_strcat_replace": {
			"addr": [ 0x482CF9, 0x482D04, 0x482D10, 0x487FB0, 0x487FBB, 0x487FC2, 0x487FC9, 0x487FD2, ],
		},
		"ZECL_stdfunc_sprintf_replace": {
			"addr": [ 0x4285CE, 0x43468B, 0x4351D4, 0x4351F7, 0x435212, 0x43524B, 0x4352D1, 0x4353AB, 0x43547C, 0x43556F, 0x4355D9, 0x435600, 0x435686, 0x438697, 0x43918D, 0x43928E, 0x4475AB, 0x447C41, 0x45AA3A, 0x45AAC4, 0x45AB98, 0x45ABB6, 0x46D3D1, 0x46D3E9, ],
		},
		"ZECL_stdfunc_ftol2_replace": {
			"addr": [ 0x4021A2, 0x4021B2, 0x4021C2, 0x4021D2, 0x4023F6, 0x402BFC, 0x402C16, 0x402C30, 0x402C4A, 0x403A51, 0x403A61, 0x403A71, 0x403A81, 0x403DB5, 0x403DC9, 0x403DDD, 0x403DF1, 0x40434E, 0x404589, 0x404599, 0x4045A9, 0x4045B9, 0x40476B, 0x40504F, 0x40664B, 0x407F9A, 0x407FE2, 0x40802A, 0x408061, 0x408636, 0x40E6CF, 0x40E6E2, 0x40E6F5, 0x40E708, 0x40E71B, 0x40E72E, 0x40E741, 0x40E754, 0x40E767, 0x40E77A, 0x40E78D, 0x40E7A0, 0x40E7B3, 0x40E7C6, 0x40E7FE, 0x40E80E, 0x40E81E, 0x40E82E, 0x40E841, 0x40E854, 0x40E867, 0x40E877, 0x40E887, 0x40E897, 0x40E8AA, 0x40E8BD, 0x40E8D0, 0x40E8E3, 0x40E8F6, 0x40E909, 0x40E954, 0x40E967, 0x40E97A, 0x40E98D, 0x40E9A0, 0x40E9B3, 0x40E9C6, 0x40EA67, 0x40EAC0, 0x40EDFC, 0x40F3F3, 0x415481, 0x417750, 0x41AA11, 0x41CC4C, 0x41CC81, 0x41CCB6, 0x41CCEB, 0x41CD79, 0x41CD8A, 0x41CD9B, 0x41CDAC, 0x41D399, 0x41D3A5, 0x420153, 0x420685, 0x421186, 0x4213D9, 0x4265E3, 0x4268BA, 0x42729D, 0x427DAD, 0x427DC7, 0x427DE1, 0x427DFB, 0x427E13, 0x427E2B, 0x427E43, 0x427E5B, 0x4280FE, 0x42813E, 0x428D2B, 0x428D45, 0x428D5F, 0x428D79, 0x42A358, 0x42A442, 0x42A456, 0x42A46A, 0x42A47E, 0x42B3FB, 0x42B416, 0x42BC7A, 0x42BD19, 0x42C111, 0x42C156, 0x42C1DA, 0x42C3EB, 0x42C41F, 0x42D84A, 0x42D894, 0x42D9E5, 0x42D9F8, 0x42DA0B, 0x42DA1E, 0x42EA31, 0x432718, 0x432C47, 0x432EEE, 0x432F90, 0x432FCE, 0x43305B, 0x433128, 0x4333F5, 0x433444, 0x43347B, 0x433508, 0x43357C, 0x4335CD, 0x4337DC, 0x433DC5, 0x436DA5, 0x436DCE, 0x43747A, 0x437858, 0x43926F, 0x43A0FC, 0x43A16E, 0x43D1A9, 0x440B6E, 0x440D9A, 0x440DB0, 0x440E9E, 0x441042, 0x441158, 0x441190, 0x443294, 0x4432A7, 0x4432BB, 0x448B52, 0x448B76, 0x448BA7, 0x448BCB, 0x44A5D9, 0x44AEC3, 0x44AFE7, 0x44CFF2, 0x450A5C, 0x450B84, 0x450B94, 0x450BA4, 0x450BB4, 0x450C37, 0x453D35, 0x453D7E, 0x453DC7, 0x453E15, 0x4542A1, 0x4542AD, 0x454345, 0x454357, 0x454369, 0x45437B, 0x454443, 0x454455, 0x454467, 0x454479, 0x454505, 0x45454E, 0x454560, 0x454572, 0x454643, 0x454655, 0x454667, 0x454679, 0x45470B, 0x454754, 0x454766, 0x454778, ],
		},
		
		"ZECL_enhance_fstp0_to_ffreep0": {
			"addr": [ 0x461DA4, 0x461F5C, 0x461F69, 0x461F9D, 0x462062, 0x4631DF, 0x4631ED, 0x4631F0, 0x463272, 0x463311, 0x46339B, 0x4636A5, 0x463B10, 0x465490, 0x4654A4, 0x465834, 0x465854, 0x465978, 0x465B4F, 0x465B8B, 0x465BE0, 0x465C23, 0x465C46, 0x465F41, 0x465F8C, 0x465FE4, 0x466035, 0x466089, 0x4660E7, 0x466132, 0x466178, 0x4661B4, 0x46621A, 0x466274, 0x467EC1, 0x467F29, 0x467FBE, 0x468037, 0x4680B5, 0x46811F, 0x4681BD, 0x468331, 0x4684FD, 0x4685C9, 0x4686C2, 0x468799, 0x468870, 0x468947, 0x468A3A, 0x468B2F, 0x468C86, 0x468D7F, 0x468F70, 0x4690C2, 0x469191, 0x46923A, 0x4692F7, 0x4693D6, 0x4694C2, 0x4695C1, 0x46967F, 0x469765, 0x469807, 0x46989F, 0x469942, 0x4699E4, 0x469A94, 0x469B43, 0x469BE5, 0x469D09, 0x469DA8, 0x469F8A, 0x46A013, 0x46A49E, 0x46A4AD, 0x46A50E, 0x46A53C, 0x46A54B, 0x46A5BA, 0x46FB52, 0x46FB9A, 0x46FBD0, 0x46FCFB, 0x46FD7E, 0x46FD8C, 0x46FD8F, 0x46FF19, 0x46FF3A, 0x470014, 0x470040, 0x47006C, 0x47007F, 0x4700F0, 0x4700FA, 0x47015D, 0x470178, 0x47017D, 0x4701E8, 0x4701FF, 0x47020E, 0x470232, 0x470241, 0x47A1D0, 0x47A29F, 0x47A2C6, 0x47A3E5, 0x47A4AA, 0x47A4AD, 0x47ED1E, 0x47ED3F, 0x47F2F6, 0x47F344, 0x47F397, 0x483B7A, 0x483B84, 0x483B86, 0x483B8B, 0x483B8D, 0x483C26, 0x483C28, 0x4846CC, 0x4856E8, 0x4856EA, 0x48571B, 0x485772, 0x485779, 0x485794, 0x4857AF, 0x4857B1, 0x4857C5, 0x488B02, 0x4892FA, 0x48938C, 0x48939A, 0x4893F3, 0x4894AE, 0x4895B2, 0x489644, 0x489652, 0x4896AB, 0x489769, 0x48B95A, 0x48B98D, 0x48B9A6, 0x48BAC3, 0x48BBC2, 0x48BC72, 0x48BD4E, 0x48C35C, 0x48C365, 0x48C36B, 0x48C376, 0x48C381, 0x48C388, ],
		},
		"ZECL_enhance_fstp0fstp0_to_ffreep1fincstp": {
			"addr": [ 0x461D8B, 0x461DAE, 0x461F31, 0x463383, 0x46A5BC, 0x46FB54, 0x46FB9C, 0x46FBD2, 0x47027C, 0x470280, 0x47A206, 0x47A260, 0x47A2C8, 0x47A358, 0x47A3BA, 0x47F35E, 0x485742, ],
		},
	}
}