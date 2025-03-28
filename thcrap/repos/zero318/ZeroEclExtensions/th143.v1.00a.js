{
	"options": {
		// Low ECL
		"zecl_lins_jump_addr": { "val": 0x488ED0 },
		"zecl_lins_jump_base_count": { "val": 67 },
		"zecl_lins_jump_new_count": { "val": 9 },
		"zecl_lins_case_addr": { "val": 0x488FDC },
		"zecl_lins_case_base_count": { "val": 94 },
		"zecl_lins_case_new_count": { "val": 9 },
		// High ECL
		"zecl_hins_jump_addr": { "val": 0x42681C },
		"zecl_hins_jump_base_count": { "val": 172 },
		"zecl_hins_jump_new_count": { "val": 1 },
		"zecl_hins_case_addr": { "val": 0x426ACC },
		"zecl_hins_case_base_count": { "val": 707 },
		"zecl_hins_case_new_count": { "val": 1 },
		// Int Vars
		"zecl_ivar_jump_addr": { "val": 0x427B40 },
		"zecl_ivar_jump_base_count": { "val": 97 },
		"zecl_ivar_jump_new_count": { "val": 1 },
		// Int Ptrs
		"zecl_iptr_jump_addr": { "val": 0x427DC8 },
		"zecl_iptr_jump_base_count": { "val": 16 },
		"zecl_iptr_jump_new_count": { "val": 0 },
		"zecl_iptr_case_addr": { "val": 0x427E08 },
		"zecl_iptr_case_base_count": { "val": 63 },
		"zecl_iptr_case_new_count": { "val": 0 },
		// Float Vars
		"zecl_fvar_jump_addr": { "val": 0x428840 },
		"zecl_fvar_jump_base_count": { "val": 97 },
		"zecl_fvar_jump_new_count": { "val": 1 },
		// Float Ptrs
		"zecl_fptr_jump_addr": { "val": 0x428B24 },
		"zecl_fptr_jump_base_count": { "val": 25 },
		"zecl_fptr_jump_new_count": { "val": 0 },
		"zecl_fptr_case_addr": { "val": 0x428B88 },
		"zecl_fptr_case_base_count": { "val": 81 },
		"zecl_fptr_case_new_count": { "val": 0 },
		
		"ecl_lins_break_addr": {
			"type": "p",
			"val": 0x488DD5
		},
		"ecl_lins_get_ivar_arg_addr": {
			"type": "p",
			"val": 0x489100
		},
		"ecl_lins_get_iptr_arg_addr": {
			"type": "p",
			"val": 0x4843E0
		},
		"ecl_hins_break_addr": {
			"type": "p",
			"val": 0x4267F5
		},
	},
	"codecaves": {
		"ZECL_low_ins_jump_table": {
			"code": "\
<codecave:ZECL143_debug_breakpoint> \
<codecave:ZECL143_thcrap_expr> \
<codecave:ZECL143_math_shl> \
<codecave:ZECL143_math_shr> \
<codecave:ZECL143_math_sar> \
<codecave:ZECL143_math_rol> \
<codecave:ZECL143_math_ror> \
<codecave:ZECL143_math_udiv> \
<codecave:ZECL143_math_umod> \
"
		},
		"ZECL_low_ins_case_table": {
			"code": "\
43 \
44 \
45 \
46 \
47 \
48 \
49 \
4A \
4B \
"
		},
		"ZECL_high_ins_jump_table": {
			"code": "\
<codecave:ZECL143_enemy_life_set_current> \
"
		},
		"ZECL_high_ins_case_table": {
			"code": "\
AC \
"
		},
		"ZECL_int_var_jump_table":  {
			"code": "\
<codecave:ZECL143_self_life_max_ivar> \
"
		},
		"ZECL_float_var_jump_table":  {
			"code": "\
<codecave:ZECL143_self_life_max_fvar> \
"
		},
		
		"ZECL143_debug_breakpoint": {
			"access": "re",
			"code": "\
CC \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL143_thcrap_expr": {
			"access": "re",
			"code": "\
83EC 04 \
89F9 \
E8 [<option:ecl_lins_get_iptr_arg_addr>] \
8B4F 04 \
83C1 14 \
31D2 \
6A 00 \
6A 00 \
6A 00 \
50 \
E8 [eval_expr] \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL143_math_shl": {
			"access": "re",
			"code": "\
8B97 08100000 \
F30F2C4C3A 0C \
807C3A 08 66 \
0F454C3A 0C \
F30F2C443A 04 \
803C3A 66 \
0F45443A 04 \
D3E0 \
89443A 04 \
C6043A 69 \
8387 08100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL143_math_shr": {
			"access": "re",
			"code": "\
8B97 08100000 \
F30F2C4C3A 0C \
807C3A 08 66 \
0F454C3A 0C \
F30F2C443A 04 \
803C3A 66 \
0F45443A 04 \
D3E8 \
89443A 04 \
C6043A 69 \
8387 08100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL143_math_sar": {
			"access": "re",
			"code": "\
8B97 08100000 \
F30F2C4C3A 0C \
807C3A 08 66 \
0F454C3A 0C \
F30F2C443A 04 \
803C3A 66 \
0F45443A 04 \
D3F8 \
89443A 04 \
C6043A 69 \
8387 08100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL143_math_rol": {
			"access": "re",
			"code": "\
8B97 08100000 \
F30F2C4C3A 0C \
807C3A 08 66 \
0F454C3A 0C \
F30F2C443A 04 \
803C3A 66 \
0F45443A 04 \
D3C0 \
89443A 04 \
C6043A 69 \
8387 08100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL143_math_ror": {
			"access": "re",
			"code": "\
8B97 08100000 \
F30F2C4C3A 0C \
807C3A 08 66 \
0F454C3A 0C \
F30F2C443A 04 \
803C3A 66 \
0F45443A 04 \
D3C8 \
89443A 04 \
C6043A 69 \
8387 08100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL143_math_udiv": {
			"access": "re",
			"code": "\
8BB7 08100000 \
F30F2C4C3E 0C \
807C3E 08 66 \
0F454C3E 0C \
F30F2C443E 04 \
803C3E 66 \
0F45443E 04 \
31D2 \
F7F1 \
89443E 04 \
C6043E 69 \
8387 08100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL143_math_umod": {
			"access": "re",
			"code": "\
8BB7 08100000 \
F30F2C4C3E 0C \
807C3E 08 66 \
0F454C3E 0C \
F30F2C443E 04 \
803C3E 66 \
0F45443E 04 \
31D2 \
F7F1 \
89543E 04 \
C6043E 69 \
8387 08100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		
		"ZECL143_enemy_life_set_current": {
			"access": "re",
			"code": "\
8B4A 04 \
6A 00 \
E8 [<option:ecl_lins_get_ivar_arg_addr>] \
8D0CC5 00000000 \
8987 18400000 \
29C1 \
898F 24400000 \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		
		"ZECL143_self_life_max_ivar": {
			"access": "re",
			"code": "\
8B81 0C520000 \
C9 \
C2 0400 \
"
		},
		
		"ZECL143_self_life_max_fvar": {
			"access": "re",
			"code": "\
DB81 0C520000 \
C9 \
C2 0400 \
"
		}
	},
	"binhacks": {
		"ZECL_low_ins_jump_table_replace": {
			"addr": 0x4875A9
		},
		"ZECL_low_ins_case_table_replace": {
			"addr": 0x4875A2
		},
		"ZECL_low_ins_max_replace": {
			"enable": "<option:zecl_lins_case_new_count>",
			"addr": 0x487598,
			"code": "(u8:<option:zecl_lins_case_base_count> + <option:zecl_lins_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_lins_case_base_count> - 1)",
		},
		"ZECL_high_ins_jump_table_replace": {
			"addr": 0x421EBA
		},
		"ZECL_high_ins_case_table_replace": {
			"addr": 0x421EB3
		},
		"ZECL_high_ins_max_replace": {
			"enable": "<option:zecl_hins_case_new_count>",
			"addr": 0x421EA6,
			"code": "(<option:zecl_hins_case_base_count> + <option:zecl_hins_case_new_count> - 1)",
			"expect": "(<option:zecl_hins_case_base_count> - 1)",
		},
		"ZECL_int_var_jump_table_replace": {
			"addr": 0x4274F0,
		},
		"ZECL_int_var_max_replace": {
			"enable": "<option:zecl_ivar_jump_new_count>",
			"addr": 0x4274E6,
			"code": "(u8:<option:zecl_ivar_jump_base_count> + <option:zecl_ivar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_ivar_jump_base_count> - 1)",
		},
		"ZECL_int_ptr_jump_table_replace": {
			"addr": 0x427CEE
		},
		"ZECL_int_ptr_case_table_replace": {
			"addr": 0x427CE7
		},
		"ZECL_int_ptr_max_replace": {
			"enable": "<option:zecl_iptr_case_new_count>",
			"addr": 0x427CDD,
			"code": "(u8:<option:zecl_iptr_case_base_count> + <option:zecl_iptr_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_iptr_case_base_count> - 1)",
		},
		"ZECL_float_var_jump_table_replace": {
			"addr": 0x427E70
		},
		"ZECL_float_var_max_replace": {
			"enable": "<option:zecl_fvar_jump_new_count>",
			"addr": 0x427E66,
			"code": "(u8:<option:zecl_fvar_jump_base_count> + <option:zecl_fvar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_fvar_jump_base_count> - 1)",
		},
		"ZECL_float_ptr_jump_table_replace": {
			"addr": 0x4289EE
		},
		"ZECL_float_ptr_case_table_replace": {
			"addr": 0x4289E7
		},
		"ZECL_float_ptr_max_replace": {
			"enable": "<option:zecl_fptr_case_new_count>",
			"addr": 0x4289DD,
			"code": "(u8:<option:zecl_fptr_case_base_count> + <option:zecl_fptr_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_fptr_case_base_count> - 1)",
		},
		
		"ZECL143_ecl_context_constructor_ext": {
			"enable": false,
			"addr": 0x41D020,
			"code": "\
31C9 \
8988 1C100000 \
8988 48100000 \
8988 78100000 \
8988 A8100000 \
8988 D8100000 \
8988 08110000 \
8988 38110000 \
8988 68110000 \
8988 98110000 \
8988 C0110000 \
C3 \
<int3:16> \
",
			"expect": "\
C781 48100000 00000000 \
C781 78100000 00000000 \
C781 A8100000 00000000 \
C781 D8100000 00000000 \
C781 08110000 00000000 \
C781 38110000 00000000 \
C781 68110000 00000000 \
C781 98110000 00000000 \
C3 \
"
		}
	}
}