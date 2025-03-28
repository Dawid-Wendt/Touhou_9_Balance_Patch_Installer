{
	"options": {
		// ECL
		"zecl_lins_jump_addr": { "val": 0x41ECBE },
		"zecl_lins_jump_base_count": { "val": 184 },
		"zecl_lins_jump_new_count": { "val": 33 },
		// Timelines
		"zecl_hins_jump_addr": { "val": 0x42AD60 },
		"zecl_hins_jump_base_count": { "val": 17 },
		"zecl_hins_jump_new_count": { "val": 1 },
		// Int Vars
		"zecl_ivar_jump_addr": { "val": 0x41FB8B },
		"zecl_ivar_jump_base_count": { "val": 101 },
		"zecl_ivar_jump_new_count": { "val": 1 },
		// Int Ptrs
		"zecl_iptr_jump_addr": { "val": 0x420034 },
		"zecl_iptr_jump_base_count": { "val": 35 },
		"zecl_iptr_jump_new_count": { "val": 1 },
		"zecl_iptr_case_addr": { "val": 0x4200C0 },
		"zecl_iptr_case_base_count": { "val": 94 },
		"zecl_iptr_case_new_count": { "val": 8 },
		// Float Vars
		"zecl_fvar_jump_addr": { "val": 0x4207B7 },
		"zecl_fvar_jump_base_count": { "val": 100 },
		"zecl_fvar_jump_new_count": { "val": 2 },
		// Float Ptrs
		"zecl_fptr_jump_addr": { "val": 0x420C08 },
		"zecl_fptr_jump_base_count": { "val": 46 },
		"zecl_fptr_jump_new_count": { "val": 2 },
		"zecl_fptr_case_addr": { "val": 0x420CC0 },
		"zecl_fptr_case_base_count": { "val": 80 },
		"zecl_fptr_case_new_count": { "val": 0 },
		
		"ecl_lins_break_addr": {
			"type": "u32",
			"val": 0x41E7E4
		},
		"ecl_lins_continue_addr": {
			"type": "u32",
			"val": 0x418520
		},
		"ecl_hins_break_addr": {
			"type": "u32",
			"val": 0x42AD37
		},
		"ecl_hins_continue_addr": {
			"type": "u32",
			"val": 0x42A8B0
		},
		"ecl_ivar_break_addr": {
			"type": "u32",
			"val": 0x41FB86
		},
		"ecl_iptr_break_addr": {
			"type": "u32",
			"val": 0x42002E
		},
		"ecl_fvar_break_addr": {
			"type": "u32",
			"val": 0x4207B1
		},
		"ecl_fptr_break_addr": {
			"type": "u32",
			"val": 0x420C02
		},
		
		"ecl_get_int_var_addr": {
			"type": "u32",
			"val": 0x41F420
		},
		"ecl_get_int_ptr_addr": {
			"type": "u32",
			"val": 0x41FE10
		},
		"ecl_get_float_var_addr": {
			"type": "u32",
			"val": 0x420120
		},
		"ecl_get_float_ptr_addr": {
			"type": "u32",
			"val": 0x420950
		},
		
		"stdfunc_free_addr": { "val": 0x4A427B },
		"stdfunc_delete_addr": { "val": 0x4A43CF },
		"stdfunc_malloc_addr": { "val": 0x4A4269 },
		"stdfunc_new_addr": { "val": 0x4A43D4 },
		"stdfunc_calloc_addr": { "val": 0 },
		"stdfunc_realloc_addr": { "val": 0 },
		"stdfunc_msize_addr": { "val": 0 },
		"stdfunc_memcpy_addr": { "val": 0 },
		"stdfunc_memmove_addr": { "val": 0 },
		"stdfunc_memset_addr": { "val": 0x4A4920 },
		"stdfunc_strlen_addr": { "val": 0x4A4CC0 },
		"stdfunc_strcpy_addr": { "val": 0x4A5D20 },
		"stdfunc_strcat_addr": { "val": 0x4A5D30 },
		"stdfunc_strcmp_addr": { "val": 0 },
		"stdfunc_strncmp_addr": { "val": 0x4A5CE0 },
		"stdfunc_sprintf_addr": { "val": 0x4A4857 },
		"stdfunc_ftol2_addr": { "val": 0x4A3E70 },
	},
	"codecaves": {
		"ZECL_low_ins_jump_table": {
			"code": "\
<codecave:ZECL8_debug_breakpoint> \
<codecave:ZECL8_thcrap_expr> \
<codecave:ZECL8_set_int_pun> \
<codecave:ZECL8_set_float_pun> \
<codecave:ZECL8_math_bit_and> \
<codecave:ZECL8_math_bit_or> \
<codecave:ZECL8_math_bit_xor> \
<codecave:ZECL8_math_bit_neg> \
<codecave:ZECL8_math_shl> \
<codecave:ZECL8_math_shr> \
<codecave:ZECL8_math_sar> \
<codecave:ZECL8_math_rol> \
<codecave:ZECL8_math_ror> \
<codecave:ZECL8_math_udiv> \
<codecave:ZECL8_math_umod> \
<codecave:ZECL8_math_int_neg> \
<codecave:ZECL8_math_float_neg> \
<codecave:ZECL8_set_int_indirect> \
<codecave:ZECL8_set_float_indirect> \
<codecave:ZECL8_math_bit_and_assign> \
<codecave:ZECL8_math_bit_or_assign> \
<codecave:ZECL8_math_bit_xor_assign> \
<codecave:ZECL8_math_bit_neg_assign> \
<codecave:ZECL8_math_shl_assign> \
<codecave:ZECL8_math_shr_assign> \
<codecave:ZECL8_math_sar_assign> \
<codecave:ZECL8_math_rol_assign> \
<codecave:ZECL8_math_ror_assign> \
<codecave:ZECL8_math_udiv_assign> \
<codecave:ZECL8_math_umod_assign> \
<codecave:ZECL8_math_int_neg_assign> \
<codecave:ZECL8_math_float_neg_assign> \
<codecave:ZECL8_inline_switch> \
"
		},
		"ZECL_high_ins_jump_table": {
			"code": "\
<codecave:ZECL8_timeline_goto> \
"
		},
		"ZECL_int_var_jump_table": {
			"code": "\
<codecave:ZECL8_compare_register_int_var> \
"
		},
		"ZECL_int_ptr_jump_table": {
			"code": "\
<codecave:ZECL8_compare_register_int_ptr> \
"
		},
		"ZECL_int_ptr_case_table": {
			"code": "22 22 22 22 22 22 22 23"
		},
		"ZECL_float_var_jump_table": {
			"code": "\
<0x4207AE> \
<codecave:ZECL8_compare_register_float_var> \
"
		},
		// Memory locations:
		// current_instruction	[EBP-C]
		// enemy				[EBP+8]
		// int scratch			[EBP-4]
		// float scratch		[EBP-10]
		//
		// Available registers:
		// Default: ESI, EDI
		// Patched: EBX
		//
		// Notes:
		// -Relies on ecl_get_int_var/ecl_get_float_var not modifying stack args
		"ZECL8_debug_breakpoint": {
			"access": "re",
			"code": "\
CC \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL8_thcrap_expr": {
			"access": "re",
			"code": "\
8B75 F4 \
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
898F 1C020000 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL8_set_int_pun": {
			"access": "re",
			"code": "\
8B75 F4 \
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
		"ZECL8_set_float_pun": {
			"access": "re",
			"code": "\
8B75 F4 \
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
		"ZECL8_math_bit_and": {
			"access": "re",
			"code": "\
8B75 F4 \
8B7D 08 \
8B5E 10 \
0FB746 0A \
A8 02 \
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
		"ZECL8_math_bit_or": {
			"access": "re",
			"code": "\
8B75 F4 \
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
		"ZECL8_math_bit_xor": {
			"access": "re",
			"code": "\
8B75 F4 \
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
		"ZECL8_math_bit_neg": {
			"access": "re",
			"code": "\
8B75 F4 \
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
		"ZECL8_math_shl": {
			"access": "re",
			"code": "\
8B75 F4 \
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
		"ZECL8_math_shr": {
			"access": "re",
			"code": "\
8B75 F4 \
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
		"ZECL8_math_sar": {
			"access": "re",
			"code": "\
8B75 F4 \
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
		"ZECL8_math_rol": {
			"access": "re",
			"code": "\
8B75 F4 \
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
		"ZECL8_math_ror": {
			"access": "re",
			"code": "\
8B75 F4 \
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
		"ZECL8_math_udiv": {
			"access": "re",
			"code": "\
8B75 F4 \
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
		"ZECL8_math_umod": {
			"access": "re",
			"code": "\
8B75 F4 \
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
		"ZECL8_math_int_neg": {
			"access": "re",
			"code": "\
8B75 F4 \
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
		"ZECL8_math_float_neg": {
			"access": "re",
			"code": "\
8B75 F4 \
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
		"ZECL8_set_int_indirect": {
			"access": "re",
			"code": "\
8B75 F4 \
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
		"ZECL8_set_float_indirect": {
			"access": "re",
			"code": "\
8B75 F4 \
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
		"ZECL8_math_bit_and_assign": {
			"access": "re",
			"code": "\
8B75 F4 \
8B7D 08 \
0FB746 0A \
8B5E 10 \
A8 02 \
74 0F \
89F9 \
89DA \
E8 [<option:ecl_get_int_var_addr>] \
89C3 \
0FB746 0A \
83C6 0C \
89F9 \
89F2 \
6A 00 \
50 \
E8 [<option:ecl_get_int_ptr_addr>] \
2118 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL8_math_bit_or_assign": {
			"access": "re",
			"code": "\
8B75 F4 \
8B7D 08 \
0FB746 0A \
8B5E 10 \
A8 02 \
74 0F \
89F9 \
89DA \
E8 [<option:ecl_get_int_var_addr>] \
89C3 \
0FB746 0A \
83C6 0C \
89F9 \
89F2 \
6A 00 \
50 \
E8 [<option:ecl_get_int_ptr_addr>] \
0918 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL8_math_bit_xor_assign": {
			"access": "re",
			"code": "\
8B75 F4 \
8B7D 08 \
0FB746 0A \
8B5E 10 \
A8 02 \
74 0F \
89F9 \
89DA \
E8 [<option:ecl_get_int_var_addr>] \
89C3 \
0FB746 0A \
83C6 0C \
89F9 \
89F2 \
6A 00 \
50 \
E8 [<option:ecl_get_int_ptr_addr>] \
3118 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL8_math_bit_not_assign": {
			"access": "re",
			"code": "\
8B4D 08 \
8B55 F4 \
0FB742 0A \
83C2 0C \
6A 00 \
50 \
E8 [<option:ecl_get_int_ptr_addr>] \
F710 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL8_math_shl_assign": {
			"access": "re",
			"code": "\
8B75 F4 \
8B7D 08 \
0FB746 0A \
8B5E 10 \
A8 02 \
74 0F \
89F9 \
89DA \
E8 [<option:ecl_get_int_var_addr>] \
89C3 \
0FB746 0A \
83C6 0C \
89F9 \
89F2 \
6A 00 \
50 \
E8 [<option:ecl_get_int_ptr_addr>] \
89D9 \
D320 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL8_math_shr_assign": {
			"access": "re",
			"code": "\
8B75 F4 \
8B7D 08 \
0FB746 0A \
8B5E 10 \
A8 02 \
74 0F \
89F9 \
89DA \
E8 [<option:ecl_get_int_var_addr>] \
89C3 \
0FB746 0A \
83C6 0C \
89F9 \
89F2 \
6A 00 \
50 \
E8 [<option:ecl_get_int_ptr_addr>] \
89D9 \
D328 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL8_math_sar_assign": {
			"access": "re",
			"code": "\
8B75 F4 \
8B7D 08 \
0FB746 0A \
8B5E 10 \
A8 02 \
74 0F \
89F9 \
89DA \
E8 [<option:ecl_get_int_var_addr>] \
89C3 \
0FB746 0A \
83C6 0C \
89F9 \
89F2 \
6A 00 \
50 \
E8 [<option:ecl_get_int_ptr_addr>] \
89D9 \
D338 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL8_math_rol_assign": {
			"access": "re",
			"code": "\
8B75 F4 \
8B7D 08 \
0FB746 0A \
8B5E 10 \
A8 02 \
74 0F \
89F9 \
89DA \
E8 [<option:ecl_get_int_var_addr>] \
89C3 \
0FB746 0A \
83C6 0C \
89F9 \
89F2 \
6A 00 \
50 \
E8 [<option:ecl_get_int_ptr_addr>] \
89D9 \
D300 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL8_math_ror_assign": {
			"access": "re",
			"code": "\
8B75 F4 \
8B7D 08 \
0FB746 0A \
8B5E 10 \
A8 02 \
74 0F \
89F9 \
89DA \
E8 [<option:ecl_get_int_var_addr>] \
89C3 \
0FB746 0A \
83C6 0C \
89F9 \
89F2 \
6A 00 \
50 \
E8 [<option:ecl_get_int_ptr_addr>] \
89D9 \
D308 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL8_math_udiv_assign": {
			"access": "re",
			"code": "\
8B75 F4 \
8B7D 08 \
0FB746 0A \
8B5E 10 \
A8 02 \
74 0F \
89F9 \
89DA \
E8 [<option:ecl_get_int_var_addr>] \
89C3 \
0FB746 0A \
83C6 0C \
89F9 \
89F2 \
6A 00 \
50 \
E8 [<option:ecl_get_int_ptr_addr>] \
89C1 \
8B00 \
31D2 \
F7F3 \
8901 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL8_math_umod_assign": {
			"access": "re",
			"code": "\
8B75 F4 \
8B7D 08 \
0FB746 0A \
8B5E 10 \
A8 02 \
74 0F \
89F9 \
89DA \
E8 [<option:ecl_get_int_var_addr>] \
89C3 \
0FB746 0A \
83C6 0C \
89F9 \
89F2 \
6A 00 \
50 \
E8 [<option:ecl_get_int_ptr_addr>] \
89C1 \
8B00 \
31D2 \
F7F3 \
8911 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL8_math_int_neg_assign": {
			"access": "re",
			"code": "\
8B4D 08 \
8B55 F4 \
0FB742 0A \
83C2 0C \
6A 00 \
50 \
E8 [<option:ecl_get_int_ptr_addr>] \
F718 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL8_math_float_neg_assign": {
			"access": "re",
			"code": "\
8B4D 08 \
8B55 F4 \
0FB742 0A \
83C2 0C \
6A 00 \
50 \
E8 [<option:ecl_get_float_ptr_addr>] \
D900 \
D9E0 \
D918 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL8_inline_switch": {
			"access": "re",
			"code": "\
8B75 F4 \
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
8B8F A02C0000 \
8941 0C \
0374D6 20 \
8975 F4 \
E9 [<option:ecl_lins_continue_addr>] \
"
		},
		"ZECL8_timeline_goto": {
			"access": "re",
			"code": "\
8B45 98 \
8B48 0C \
8B51 08 \
8950 08 \
0349 0C \
8948 0C \
E9 [<option:ecl_hins_continue_addr>] \
"
		},
		"ZECL8_compare_register_int_var": {
			"access": "re",
			"code": "\
8B45 F0 \
8B80 A02C0000 \
8B80 1C020000 \
E9 [<option:ecl_ivar_break_addr>] \
"
		},
		"ZECL8_compare_register_int_ptr": {
			"access": "re",
			"code": "\
8B45 F0 \
8B80 A02C0000 \
05 1C020000 \
E9 [<option:ecl_iptr_break_addr>] \
"
		},
		"ZECL8_compare_register_float_var": {
			"access": "re",
			"code": "\
8B45 F0 \
8B80 A02C0000 \
DB80 1C020000 \
E9 [<option:ecl_fvar_break_addr>] \
"
		},
	},
	"binhacks": {
		"ZECL8_run_ecl_EBX_push": {
			"addr": 0x4184C8,
			"code": "\
8B4D 08 \
8D81 200A0000 \
FFF3 \
",
			"expect": "\
8B45 08 \
05 200A0000 \
8B4D 08 \
"
		},
		"ZECL8_run_ecl_EBX_pop": {
			"addr": 0x41ECB6,
			"code": "5B 5F 5E C9 C2 0400 CC",
			"expect": "5F 5E 8BE5 5D C2 0400"
		},
		
		"ZECL_low_ins_jump_table_replace": {
			"addr": 0x418626
		},
		"ZECL_low_ins_max_replace": {
			"enable": "<option:zecl_lins_jump_new_count>",
			"addr": 0x418613,
			"code": "(<option:zecl_lins_jump_base_count> + <option:zecl_lins_jump_new_count> - 1)",
			"expect": "(<option:zecl_lins_jump_base_count> - 1)",
		},
		"ZECL_high_ins_jump_table_replace": {
			"addr": 0x42A915
		},
		"ZECL_high_ins_max_replace": {
			"enable": "<option:zecl_hins_jump_new_count>",
			"addr": 0x42A908,
			"code": "(u8:<option:zecl_hins_jump_base_count> + <option:zecl_hins_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_hins_jump_base_count> - 1)",
		},
		"ZECL_int_var_jump_table_replace": {
			"addr": 0x41F44F,
		},
		"ZECL_int_var_max_replace": {
			"enable": "<option:zecl_ivar_jump_new_count>",
			"addr": 0x41F442,
			"code": "(u8:<option:zecl_ivar_jump_base_count> + <option:zecl_ivar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_ivar_jump_base_count> - 1)",
		},
		"ZECL_int_ptr_jump_table_replace": {
			"addr": 0x41FE69
		},
		"ZECL_int_ptr_case_table_replace": {
			"addr": 0x41FE62
		},
		"ZECL_int_ptr_max_replace": {
			"enable": "<option:zecl_iptr_case_new_count>",
			"addr": 0x41FE55,
			"code": "(u8:<option:zecl_iptr_case_base_count> + <option:zecl_iptr_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_iptr_case_base_count> - 1)",
		},
		"ZECL_float_var_jump_table_replace": {
			"addr": 0x42014F,
		},
		"ZECL_float_var_max_replace": {
			"enable": "<option:zecl_fvar_jump_new_count>",
			"addr": 0x420142,
			"code": "(u8:<option:zecl_fvar_jump_base_count> + <option:zecl_fvar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_fvar_jump_base_count> - 1)",
		},
		"ZECL_float_ptr_jump_table_replace": {
			"addr": 0x4209AE
		},
		"ZECL_float_ptr_case_table_replace": {
			"addr": 0x4209A7
		},
		"ZECL_float_ptr_max_replace": {
			"enable": "<option:zecl_fptr_case_new_count>",
			"addr": 0x42099A,
			"code": "(u8:<option:zecl_fptr_case_base_count> + <option:zecl_fptr_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_fptr_case_base_count> - 1)",
		},
		
		"ZECL8_FixLaserBlend_A": {
			"addr": 0x431DA3,
			"code": "\
3D FF000000 \
B9 FF000000 \
0F4CC8 \
8B55 D8 \
888A F3010000 \
E9 [0x431E62] \
<nop:12> \
",
		},
		"ZECL8_FixLaserBlend_B": {
			"addr": 0x431FCC,
			"code": "DA81 78050000",
		},
		"ZECL8_FixLaserBlend_C": {
			"addr": 0x431FD7,
			"code": "\
8D90 01FFFFFF \
F7DA \
31C9 \
3D FF000000 \
0F4CCA \
8B45 D8 \
8888 F3010000 \
EB 57 \
<nop:7> \
"
		},
		
		"ZECL_stdfunc_free_replace": {
			"addr": [ 0x40B8AB, 0x43AD89, 0x43EEF6, 0x446935, 0x446D2D, 0x44774E, 0x447757, 0x447918, 0x467C24, 0x46E2E7, 0x46E3D0, 0x46EBBE, 0x46EE0A, 0x471424, 0x4977E7, 0x497835, 0x4A084F, 0x4A43CF, 0x4A558A, 0x4A6C7F, 0x4A7C44, 0x4A80AA, 0x4A814B, 0x4A8160, 0x4A9EB4, 0x4A9ED7, 0x4A9EE9, 0x4A9EF1, 0x4A9F0C, 0x4A9F14, 0x4A9F3B, 0x4A9F43, 0x4AABD1, 0x4AACCF, 0x4ABED6, 0x4AC69B, 0x4AC6C0, 0x4AC990, 0x4AF9B6, 0x4AFA27, 0x4AFA48, 0x4AFA50, 0x4AFA58, 0x4AFA60, 0x4AFA68, 0x4AFA70, 0x4AFA77, 0x4AFA7F, 0x4AFA87, 0x4AFA8F, 0x4AFA97, 0x4AFA9F, 0x4AFAA7, 0x4AFAAF, 0x4AFAB7, 0x4AFABF, 0x4AFACA, 0x4AFAD2, 0x4AFADA, 0x4AFAE2, 0x4AFAEA, 0x4AFAF2, 0x4AFAFA, 0x4AFB02, 0x4AFB0A, 0x4AFB12, 0x4AFB1A, 0x4AFB22, 0x4AFB2A, 0x4AFB32, 0x4AFB3A, 0x4AFB42, 0x4AFB50, 0x4AFB5B, 0x4AFB66, 0x4AFB71, 0x4AFB7C, 0x4AFB87, 0x4AFB92, 0x4AFB9D, 0x4AFBA8, 0x4AFBB3, 0x4AFBBE, 0x4AFBE6, 0x4AFC03, 0x4AFC1F, 0x4AFC4B, 0x4AFC68, 0x4AFC85, 0x4AFCA2, 0x4AFCBF, 0x4AFCDC, 0x4AFCF8, 0x4B0233, 0x4B0529, 0x4B0893, 0x4B08A1, 0x4B09D7, 0x4B0A01, 0x4B1BB2, 0x4B1F21, 0x4B1F42, 0x4B25F6, 0x4B2A48, 0x4B2A57, 0x4B2AD2, 0x4B2B02, 0x4B2B0A, 0x4B2CA3, 0x4B2D5F, 0x4B2D6E, 0x4B2D7D, 0x4B2EBB, ],
		},
		"ZECL_stdfunc_delete_replace": {
			"addr": [ 0x429DB4, 0x437ABF, 0x43ACD3, 0x43ACF5, 0x43CE1D, 0x441E2D, 0x441E5D, 0x443953, 0x446E79, 0x446E9A, 0x446EEE, 0x449C34, 0x45312F, 0x45A0CF, 0x45C149, 0x45C49D, 0x468270, 0x470AA4, 0x470AD8, 0x47144F, 0x4716D1, 0x471B17, 0x471B59, 0x471C2D, 0x471E62, 0x471EA4, 0x47205D, 0x4720F5, 0x47226E, 0x4722AD, 0x472354, 0x472B1D, 0x47371D, 0x473C9D, 0x474AB9, 0x474ADF, 0x47BB07, 0x47BB1B, 0x47BB31, 0x47BB47, 0x47BB5F, 0x47D226, 0x47D68D, 0x47D6A0, 0x47D7B2, 0x47DA9C, 0x47DAA9, 0x47DAB5, 0x47DEFE, 0x47DF06, 0x47DF0E, 0x47DF16, 0x47DF1D, 0x47F2A1, 0x47F3BA, 0x47F4A1, 0x47F4A9, 0x47F577, 0x47F6A5, 0x47F6AD, 0x47FA9F, 0x47FAAA, 0x47FF58, 0x47FF63, 0x48042F, 0x480437, 0x48043F, 0x480447, 0x480B58, 0x480B60, 0x480B68, 0x480B70, 0x480B78, 0x480EFC, 0x480F04, 0x480F0C, 0x480F13, 0x48159F, 0x4818F1, 0x481917, 0x481922, 0x481D1A, 0x481FBA, 0x48576D, 0x485A76, 0x485F8C, 0x485FE0, 0x486782, 0x4867A3, 0x4B2F94, 0x4B2FA8, 0x4B2FEC, 0x4B2FF7, 0x4B3014, 0x4B3086, 0x4B3093, 0x4B30BF, 0x4B30D4, 0x4B30E8, 0x4B3104, 0x4B3124, 0x4B3138, 0x4B314C, 0x4B3164, 0x4B316F, 0x4B3184, 0x4B318F, 0x4B31C4, 0x4B31E4, 0x4B3217, 0x4B3221, 0x4B322B, 0x4B323F, 0x4B3253, 0x4B325D, 0x4B3271, 0x4B327B, 0x4B328F, 0x4B3299, 0x4B32A3, 0x4B32B7, 0x4B32C1, 0x4B32CB, 0x4B32DF, 0x4B32E9, 0x4B32FD, 0x4B3307, 0x4B331B, 0x4B3325, 0x4B332F, 0x4B3355, 0x4B3369, 0x4B3385, 0x4B3399, 0x4B33BF, 0x4B33C9, 0x4B33D3, 0x4B33DD, 0x4B33E7, 0x4B33F1, 0x4B33FB, 0x4B3405, 0x4B340F, 0x4B3419, 0x4B3423, 0x4B342D, 0x4B3437, 0x4B3441, 0x4B344B, 0x4B3455, 0x4B345F, 0x4B3469, 0x4B3473, 0x4B347D, 0x4B3487, 0x4B3491, 0x4B349B, 0x4B34A5, 0x4B34AF, 0x4B34B9, 0x4B34C3, 0x4B34CD, 0x4B34D7, 0x4B34E1, 0x4B34EB, 0x4B34F5, 0x4B34FF, 0x4B3509, 0x4B3513, 0x4B351D, 0x4B3527, ],
		},
		"ZECL_stdfunc_malloc_replace": {
			"addr": [ 0x40B88B, 0x43AD33, 0x447537, 0x447577, 0x4977B8, 0x497800, 0x49A5BC, 0x4A3D5B, 0x4A552E, 0x4A6C6C, 0x4A78FD, 0x4A8111, 0x4AABDF, 0x4AB2A4, 0x4AB943, 0x4AC647, 0x4AC677, 0x4AC8A1, 0x4AC96D, 0x4AC9D5, 0x4ACA0A, 0x4ACAA0, 0x4AF3FA, 0x4B048C, 0x4B0770, 0x4B083E, 0x4B096A, 0x4B2041, 0x4B296F, 0x4B2A02, 0x4B2B9A, 0x4B2C53, 0x4B2C6E, 0x4B2D1F, 0x4B2EE4, ],
		},
		"ZECL_stdfunc_new_replace": {
			"addr": [ 0x4296C0, 0x437AFD, 0x43AD40, 0x43AD57, 0x43CC8F, 0x43CCF7, 0x43CE80, 0x4419D5, 0x4438C0, 0x44651D, 0x446957, 0x4497B7, 0x451FD6, 0x452860, 0x4582B5, 0x45B8E2, 0x45C216, 0x4675E3, 0x470AB3, 0x470AEA, 0x471482, 0x471923, 0x471A70, 0x471B6A, 0x471CA0, 0x471DBB, 0x471EB5, 0x471F7A, 0x47211F, 0x4721C7, 0x4748F9, 0x474FD8, 0x47BEB4, 0x47BFCC, 0x47C402, 0x47C6C7, 0x47C8A2, 0x47CB54, 0x47CFAD, 0x47CFC8, 0x47D0F5, 0x47D40A, 0x47D44B, 0x47D872, 0x47DBAA, 0x47DC02, 0x47DCDA, 0x47F21F, 0x47F32F, 0x47F381, 0x47F4F1, 0x47F540, 0x47F873, 0x47F8CA, 0x47F903, 0x47FBBF, 0x47FC18, 0x47FC6C, 0x47FF87, 0x480119, 0x480167, 0x480533, 0x480581, 0x480C52, 0x480CAA, 0x480D71, 0x481982, 0x4819F7, 0x481FED, 0x485063, 0x485CBB, 0x486064, 0x48608B, 0x4860B5, 0x4860DF, 0x486109, 0x486133, 0x48615D, 0x486187, 0x4861B1, 0x4861DB, 0x486205, 0x48622F, 0x486259, 0x486283, 0x4862E4, 0x48630E, 0x486338, 0x486362, 0x48638C, 0x4863B6, 0x4863E0, 0x48642A, 0x486454, 0x48647E, 0x4864A8, 0x4864D2, 0x4864FC, 0x486568, 0x486592, 0x4865BC, 0x4865E6, 0x486610, 0x48663A, 0x486686, 0x4866A9, 0x4866CC, 0x4866EF, ],
		},
		
		"ZECL_stdfunc_memset_replace": {
			"addr": [ 0x43F12F, 0x43F230, 0x4542D2, 0x4547BC, 0x45499C, 0x4584A3, 0x46D77F, 0x46DE5D, 0x46E028, 0x4714C8, 0x471644, 0x4A6C06, 0x4A716E, 0x4AB972, 0x4AF949, 0x4B0945, 0x4B097B, 0x4B1E57, ],
		},
		"ZECL_stdfunc_strlen_replace": {
			"addr": [ 0x43FA9F, 0x43FAC2, 0x43FAE3, 0x43FB06, 0x43FB39, 0x43FB5C, 0x43FB7F, 0x43FBA2, 0x43FBD1, 0x43FDBB, 0x43FDDE, 0x43FDFF, 0x43FE22, 0x43FE55, 0x43FE78, 0x43FE9B, 0x43FEBE, 0x43FEED, 0x45428B, 0x4547DB, 0x4549B8, 0x454C36, 0x4A5CB5, 0x4A6FAB, 0x4A7978, 0x4AABD8, 0x4AC32F, 0x4AC342, 0x4AC365, 0x4AC372, 0x4AC3D5, 0x4AC62F, 0x4AC668, 0x4AEDCD, 0x4B0613, 0x4B061E, 0x4B0B10, 0x4B0B25, 0x4B0B48, 0x4B1E08, 0x4B2D17, 0x4B2EDD, ],
		},
		"ZECL_stdfunc_strcpy_replace": {
			"addr": [ 0x45408C, 0x4563D0, 0x456489, 0x456914, 0x45692B, 0x4574DD, 0x459911, 0x459949, 0x459C5D, 0x459D71, 0x459DCE, 0x467B06, 0x46D7CB, 0x46E2B3, 0x46ED6A, 0x4A7020, 0x4AABF1, 0x4AC31B, 0x4AC390, 0x4AC685, 0x4AEEF3, 0x4B0AFC, 0x4B0B64, 0x4B160B, 0x4B1628, 0x4B2D30, 0x4B2EF1, ],
		},
		"ZECL_stdfunc_strcat_replace": {
			"addr": [ 0x4AC397, 0x4AC3A2, 0x4AC3AE, 0x4B0B70, 0x4B0B7B, 0x4B0B82, 0x4B0B89, 0x4B0B92, ],
		},
		
		"ZECL_stdfunc_strncmp_replace": {
			"addr": [ 0x4485CB, 0x44864C, 0x45C941, 0x45C99E, 0x45CBE7, ],
		},
		"ZECL_stdfunc_sprintf_replace": {
			"addr": [ 0x438E81, 0x44212B, 0x442A9B, 0x442B21, 0x442BFB, 0x442CCC, 0x442DBF, 0x442E29, 0x442E50, 0x442ED6, 0x442F04, 0x442F27, 0x442F42, 0x4461D2, 0x44703B, 0x44713C, 0x456D99, 0x45745A, 0x46E24C, 0x46E2D5, 0x46E3A8, 0x46E3C6, 0x488F12, 0x488F2A, ],
		},
		"ZECL_stdfunc_sscanf_replace": {
			"addr": 0x448671
		},
		"ZECL_stdfunc_ftol2_replace": {
			"addr": [ 0x402C1A, 0x402C2A, 0x402C3A, 0x402C4A, 0x402F4F, 0x403B48, 0x403B5A, 0x403B6C, 0x403B7E, 0x404781, 0x404791, 0x4047A1, 0x4047B1, 0x404ABF, 0x404AD1, 0x404AE3, 0x404AF5, 0x4050CD, 0x4052D9, 0x4052E9, 0x4052F9, 0x405309, 0x405500, 0x4059AF, 0x406B0A, 0x406B8A, 0x406BFA, 0x40893D, 0x40A7C2, 0x40A80A, 0x40A852, 0x40A889, 0x40ACA1, 0x40ACF2, 0x40AD43, 0x40AD83, 0x40B028, 0x40B079, 0x40B0CA, 0x40B10A, 0x40BBEF, 0x416D0E, 0x41F5F1, 0x41F614, 0x41F666, 0x41F67C, 0x41F692, 0x41F6A8, 0x41F6BE, 0x41F6D4, 0x41F6EA, 0x41F700, 0x41F716, 0x41F72C, 0x41F73F, 0x41F752, 0x41F765, 0x41F778, 0x41F78B, 0x41F79E, 0x41F7B1, 0x41F7C4, 0x41F7DD, 0x41F7F6, 0x41F80F, 0x41F828, 0x41F860, 0x41F870, 0x41F880, 0x41F890, 0x41F8A3, 0x41F8B6, 0x41F8C9, 0x41F8D9, 0x41F8E9, 0x41F8F9, 0x41F90C, 0x41F91F, 0x41F932, 0x41F945, 0x41F958, 0x41F96B, 0x41F9B6, 0x41F9C9, 0x41F9DC, 0x41F9EF, 0x41FA02, 0x41FA15, 0x41FA28, 0x41FACC, 0x41FAF5, 0x42012C, 0x420983, 0x422493, 0x426244, 0x429909, 0x429915, 0x42D15B, 0x42D173, 0x42D2DD, 0x42F2C0, 0x431D9E, 0x431FD2, 0x4332EF, 0x43501E, 0x435033, 0x435048, 0x43505D, 0x437F75, 0x437F8D, 0x437FA5, 0x437FBD, 0x437FD6, 0x437FEF, 0x438008, 0x438021, 0x438F87, 0x438F9C, 0x438FB1, 0x438FC6, 0x4398E1, 0x439B39, 0x439B86, 0x43A1C6, 0x43A1D9, 0x43A1EC, 0x43A1FF, 0x43AE57, 0x440EA7, 0x441087, 0x4416A5, 0x4448E5, 0x44490E, 0x444FBD, 0x4453A8, 0x44666E, 0x44711D, 0x44811E, 0x448190, 0x44BEAE, 0x44BED4, 0x44BFF0, 0x44CFBD, 0x44D11E, 0x4536A5, 0x453C90, 0x453CB3, 0x456332, 0x45B18D, 0x45B797, 0x45B846, 0x45B87B, 0x45BCF4, 0x45D68C, 0x45E03A, 0x45E40A, 0x45E65C, 0x45E784, 0x45E794, 0x45E7A4, 0x45E7B4, 0x45E837, 0x461B88, 0x461BDB, 0x461C2E, 0x461C86, 0x461CDE, 0x461D31, 0x461D84, 0x461DDC, 0x46634D, 0x466359, 0x466434, 0x466446, 0x466458, 0x46646A, 0x4665A5, 0x4665F4, 0x466606, 0x466618, 0x466719, 0x466762, 0x466774, 0x466786, 0x46FB8F, 0x46FBBD, 0x46FD16, 0x46FD44, 0x472890, ],
		},
		
		"ZECL_enhance_fstp0_to_ffreep0": {
			"addr": [ 0x476D1A, 0x476D6A, 0x476EF0, 0x477214, 0x477CA5, 0x477DE8, 0x477E84, 0x478152, 0x478161, 0x478192, 0x47827B, 0x4784A4, 0x47859B, 0x4785D3, 0x4785EC, 0x47866D, 0x47873C, 0x478877, 0x478B7E, 0x478B99, 0x478BDB, 0x478CED, 0x4791E4, 0x479D0A, 0x479D1A, 0x479D30, 0x479F6B, 0x47A013, 0x47A01B, 0x47A020, 0x47A0BB, 0x47A0C3, 0x47A0C8, 0x47A19D, 0x47A262, 0x47A267, 0x47A26A, 0x47D85F, 0x47D86D, 0x47D870, 0x47D8F8, 0x47D997, 0x47DA21, 0x47FA61, 0x47FA75, 0x47FEF5, 0x47FF18, 0x480061, 0x480298, 0x4802E6, 0x48034B, 0x48039D, 0x4803DE, 0x480727, 0x480781, 0x4807E3, 0x480846, 0x4808B5, 0x480917, 0x480965, 0x4809C4, 0x480A27, 0x480A96, 0x480AF0, 0x481E5D, 0x481ECE, 0x481ED2, 0x4821FC, 0x4822EC, 0x48240F, 0x482510, 0x482611, 0x482712, 0x48282F, 0x482951, 0x482AF9, 0x482C1C, 0x482D1D, 0x482E3B, 0x482F34, 0x482F38, 0x482F3D, 0x482F68, 0x483026, 0x48303E, 0x4831CE, 0x4832C0, 0x48338F, 0x48346D, 0x483573, 0x483686, 0x4837AD, 0x48388D, 0x4839A0, 0x483BA8, 0x483C79, 0x483D75, 0x483EB2, 0x483F58, 0x483FF4, 0x484097, 0x484139, 0x4841E9, 0x484298, 0x484370, 0x484402, 0x4844A2, 0x4845C6, 0x484665, 0x484847, 0x4848D0, 0x484954, 0x484A02, 0x484A96, 0x484B2D, 0x484BB0, 0x484C6A, 0x484D3D, 0x484E3B, 0x484EC7, 0x484FA1, 0x4854F8, 0x485507, 0x485568, 0x485596, 0x4855A5, 0x485614, 0x485EFE, 0x486FCA, 0x48B56F, 0x48B5E6, 0x48B832, 0x48B89E, 0x48B8C9, 0x48B925, 0x48B93B, 0x48B9CD, 0x48BAF9, 0x48BB56, 0x48BB5B, 0x48BB99, 0x48BBC1, 0x48BC05, 0x48BC1B, 0x48BC33, 0x48BC46, 0x48BC60, 0x48BC6F, 0x48BCCA, 0x48BDED, 0x48BF80, 0x48BF8B, 0x48C200, 0x48C242, 0x48C276, 0x48C2AA, 0x48C4FD, 0x48C509, 0x48C5F0, 0x48C602, 0x48C737, 0x48C739, 0x48C7DD, 0x48C845, 0x48C922, 0x48C981, 0x48CB6B, 0x48CC93, 0x48CDAA, 0x48CDAE, 0x48CDC7, 0x48CF05, 0x48CF32, 0x48CFDA, 0x48E7D9, 0x48E7EC, 0x48E85D, 0x48EB89, 0x48EB9C, 0x48EC0D, 0x4A0EFD, 0x4A0FCC, 0x4A0FF3, 0x4A1112, 0x4A11D7, 0x4A11DA, 0x4A3F72, 0x4A4022, 0x4A40DE, 0x4A414A, 0x4A417D, 0x4A4196, 0x4A5E9E, 0x4A5EBF, 0x4A5FD3, 0x4A67E6, 0x4A6834, 0x4A6887, 0x4A7D8A, 0x4A7D94, 0x4A7D96, 0x4A7D9B, 0x4A7D9D, 0x4A7E36, 0x4A7E38, 0x4A8DBC, 0x4A8DC5, 0x4A8DCB, 0x4A8DD6, 0x4A8DE1, 0x4A8DE8, 0x4A9172, 0x4A996A, 0x4A99FC, 0x4A9A0A, 0x4A9A63, 0x4A9B1E, 0x4A9C22, 0x4A9CB4, 0x4A9CC2, 0x4A9D1B, 0x4A9DD9, 0x4AD516, 0x4AE138, 0x4AE13A, 0x4AE16B, 0x4AE1C2, 0x4AE1C9, 0x4AE1E4, 0x4AE1FF, 0x4AE201, 0x4AE215, ],
		},
		"ZECL_enhance_fstp0fstp0_to_ffreep1fincstp": {
			"addr": [ 0x476E07, 0x476E54, 0x476FAD, 0x47701C, 0x477262, 0x477333, 0x477337, 0x477399, 0x47742A, 0x477606, 0x47760A, 0x477B65, 0x477C73, 0x477C84, 0x477D50, 0x477DB5, 0x477DB9, 0x478194, 0x4781A6, 0x478262, 0x478285, 0x4784A6, 0x47859D, 0x47884B, 0x47894C, 0x478950, 0x478A91, 0x478CEF, 0x478DB2, 0x478DC4, 0x478EA7, 0x478EBC, 0x478FA4, 0x4791E6, 0x479723, 0x479727, 0x479DC6, 0x479DDF, 0x479F6D, 0x479F73, 0x47A015, 0x47A0BD, 0x47A19F, 0x47DA09, 0x481890, 0x483028, 0x485616, 0x48BD92, 0x48BE9D, 0x48BF82, 0x48C321, 0x48C3D5, 0x48C4F9, 0x48C561, 0x48C878, 0x4A0F33, 0x4A0F8D, 0x4A0FF5, 0x4A1085, 0x4A10E7, 0x4A684E, 0x4AE192, ],
		},
	}
}