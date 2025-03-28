{
	"codecaves": {
		"ZECL_low_ins_jump_table": {
			"code": "\
<codecave:ZECL19_debug_breakpoint> \
<codecave:ZECL19_thcrap_expr> \
<codecave:ZECL19_math_shl> \
<codecave:ZECL19_math_shr> \
<codecave:ZECL19_math_sar> \
<codecave:ZECL19_math_rol> \
<codecave:ZECL19_math_ror> \
<codecave:ZECL19_math_udiv> \
<codecave:ZECL19_math_umod> \
"
		},
		"ZECL_low_ins_case_table": {
			"code": "\
47 \
48 \
49 \
4A \
4B \
4C \
4D \
4E \
4F \
"
		},
		"ZECL_high_ins_jump_table": {
			"code": "\
<codecave:ZECL19_count_cards> \
<codecave:ZECL19_opposite_count_cards> \
<codecave:ZECL19_player_add_lives> \
<codecave:ZECL19_opposite_player_add_lives> \
<codecave:ZECL19_player_add_bombs> \
<codecave:ZECL19_opposite_player_add_bombs> \
<codecave:ZECL19_player_add_life_fragments> \
<codecave:ZECL19_opposite_player_add_life_fragments> \
<codecave:ZECL19_player_add_bomb_fragments> \
<codecave:ZECL19_opposite_player_add_bomb_fragments> \
<codecave:ZECL19_drop_game_side> \
"
		},
		"ZECL_int_var_jump_table": {
			"code": "\
<codecave:ZECL19_opposite_player_shot_ivar> \
<codecave:ZECL19_opposite_player_power_ivar> \
<codecave:ZECL19_opposite_player_deaths_ivar> \
<codecave:ZECL19_opposite_player_bombs_used_ivar> \
<codecave:ZECL19_player_lives_ivar> \
<codecave:ZECL19_opposite_player_lives_ivar> \
<codecave:ZECL19_player_bombs_ivar> \
<codecave:ZECL19_opposite_player_bombs_ivar> \
<codecave:ZECL19_player_state_ivar> \
<codecave:ZECL19_opposite_player_state_ivar> \
<codecave:ZECL19_player_barrier_state_ivar> \
<codecave:ZECL19_opposite_player_barrier_state_ivar> \
<codecave:ZECL19_player_flags_ivar> \
<codecave:ZECL19_opposite_player_flags_ivar> \
<codecave:ZECL19_player_life_fragments_ivar> \
<codecave:ZECL19_opposite_player_life_fragments_ivar> \
<codecave:ZECL19_player_bomb_fragments_ivar> \
<codecave:ZECL19_opposite_player_bomb_fragments_ivar> \
<codecave:ZECL19_opposite_game_side_ivar> \
"
		},
		"ZECL_int_ptr_jump_table": {
			"code": "\
<codecave:ZECL19_opposite_player_deaths_iptr> \
<codecave:ZECL19_opposite_player_bombs_used_iptr> \
"
		},
		"ZECL_int_ptr_case_table": {
			"code": "\
13131313131313131313 \
13 \
13 \
14 \
15 \
"
		},
		"ZECL_float_var_jump_table": {
			"code": "\
<codecave:ZECL19_opposite_player_shot_fvar> \
<codecave:ZECL19_opposite_player_power_fvar> \
<codecave:ZECL19_opposite_player_deaths_fvar> \
<codecave:ZECL19_opposite_player_bombs_used_fvar> \
<codecave:ZECL19_player_lives_fvar> \
<codecave:ZECL19_opposite_player_lives_fvar> \
<codecave:ZECL19_player_bombs_fvar> \
<codecave:ZECL19_opposite_player_bombs_fvar> \
<codecave:ZECL19_player_state_fvar> \
<codecave:ZECL19_opposite_player_state_fvar> \
<codecave:ZECL19_player_barrier_state_fvar> \
<codecave:ZECL19_opposite_player_barrier_state_fvar> \
<codecave:ZECL19_player_life_fragments_fvar> \
<codecave:ZECL19_opposite_player_life_fragments_fvar> \
<codecave:ZECL19_player_bomb_fragments_fvar> \
<codecave:ZECL19_opposite_player_bomb_fragments_fvar> \
<codecave:ZECL19_opposite_game_side_fvar> \
"
		},
		"ZECL19_debug_breakpoint": {
			"access": "re",
			"code": "\
CC \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_math_shl": {
			"access": "re",
			"code": "\
8B97 0C100000 \
F30F2C4C3A 10 \
807C3A 0C 66 \
0F454C3A 10 \
F30F2C443A 08 \
807C3A 04 66 \
0F45443A 08 \
D3E0 \
89443A 08 \
C6443A 04 69 \
8387 0C100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_math_shr": {
			"access": "re",
			"code": "\
8B97 0C100000 \
F30F2C4C3A 10 \
807C3A 0C 66 \
0F454C3A 10 \
F30F2C443A 08 \
807C3A 04 66 \
0F45443A 08 \
D3E8 \
89443A 08 \
C6443A 04 69 \
8387 0C100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_math_sar": {
			"access": "re",
			"code": "\
8B97 0C100000 \
F30F2C4C3A 10 \
807C3A 0C 66 \
0F454C3A 10 \
F30F2C443A 08 \
807C3A 04 66 \
0F45443A 08 \
D3F8 \
89443A 08 \
C6443A 04 69 \
8387 0C100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_math_rol": {
			"access": "re",
			"code": "\
8B97 0C100000 \
F30F2C4C3A 10 \
807C3A 0C 66 \
0F454C3A 10 \
F30F2C443A 08 \
807C3A 04 66 \
0F45443A 08 \
D3C0 \
89443A 08 \
C6443A 04 69 \
8387 0C100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_math_ror": {
			"access": "re",
			"code": "\
8B97 0C100000 \
F30F2C4C3A 10 \
807C3A 0C 66 \
0F454C3A 10 \
F30F2C443A 08 \
807C3A 04 66 \
0F45443A 08 \
D3C8 \
89443A 08 \
C6443A 04 69 \
8387 0C100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_math_udiv": {
			"access": "re",
			"code": "\
8BB7 0C100000 \
F30F2C4C3E 10 \
807C3E 0C 66 \
0F454C3E 10 \
F30F2C443E 08 \
807C3E 04 66 \
0F45443E 08 \
31D2 \
F7F1 \
89443E 08 \
C6443E 04 69 \
8387 0C100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_math_umod": {
			"access": "re",
			"code": "\
8BB7 0C100000 \
F30F2C4C3E 10 \
807C3E 0C 66 \
0F454C3E 10 \
F30F2C443E 08 \
807C3E 04 66 \
0F45443E 08 \
31D2 \
F7F1 \
89543E 08 \
C6443E 04 69 \
8387 0C100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_player_add_lives": {
			"access": "re",
			"code": "\
8B87 C8550000 \
6A 00 \
8B48 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
6B97 38560000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
85C0 \
78 0A \
E8 [codecave:globals_side_add_lives] \
E9 [<option:ecl_hins_break_addr>] \
F7D8 \
E8 [codecave:globals_side_sub_lives] \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_opposite_player_add_lives": {
			"access": "re",
			"code": "\
8B87 C8550000 \
6A 00 \
8B48 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
6B97 38560000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
85C0 \
78 0A \
E8 [codecave:globals_side_add_lives] \
E9 [<option:ecl_hins_break_addr>] \
F7D8 \
E8 [codecave:globals_side_sub_lives] \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_player_add_bombs": {
			"access": "re",
			"code": "\
8B87 C8550000 \
6A 00 \
8B48 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
6B97 38560000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
85C0 \
78 0A \
E8 [codecave:globals_side_add_bombs] \
E9 [<option:ecl_hins_break_addr>] \
F7D8 \
E8 [codecave:globals_side_sub_bombs] \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_opposite_player_add_bombs": {
			"access": "re",
			"code": "\
8B87 C8550000 \
6A 00 \
8B48 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
6B97 38560000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
85C0 \
78 0A \
E8 [codecave:globals_side_add_bombs] \
E9 [<option:ecl_hins_break_addr>] \
F7D8 \
E8 [codecave:globals_side_sub_bombs] \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_player_add_life_fragments": {
			"access": "re",
			"code": "\
8B87 C8550000 \
6A 00 \
8B48 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
6B97 38560000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
85C0 \
78 0A \
E8 [codecave:globals_side_add_life_fragments] \
E9 [<option:ecl_hins_break_addr>] \
F7D8 \
E8 [codecave:globals_side_sub_life_fragments] \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_opposite_player_add_life_fragments": {
			"access": "re",
			"code": "\
8B87 C8550000 \
6A 00 \
8B48 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
6B97 38560000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
85C0 \
78 0A \
E8 [codecave:globals_side_add_life_fragments] \
E9 [<option:ecl_hins_break_addr>] \
F7D8 \
E8 [codecave:globals_side_sub_life_fragments] \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_player_add_bomb_fragments": {
			"access": "re",
			"code": "\
8B87 C8550000 \
6A 00 \
8B48 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
6B97 38560000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
85C0 \
78 0A \
E8 [codecave:globals_side_add_bomb_fragments] \
E9 [<option:ecl_hins_break_addr>] \
F7D8 \
E8 [codecave:globals_side_sub_bomb_fragments] \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_opposite_player_add_bomb_fragments": {
			"access": "re",
			"code": "\
8B87 C8550000 \
6A 00 \
8B48 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
6B97 38560000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
85C0 \
78 0A \
E8 [codecave:globals_side_add_bomb_fragments] \
E9 [<option:ecl_hins_break_addr>] \
F7D8 \
E8 [codecave:globals_side_sub_bomb_fragments] \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_drop_game_side": {
			"access": "re",
			"code": "\
8B87 C8550000 \
6A 00 \
8B48 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
8986 24500000 \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"item_collection_case_table": {
			"access": "r",
			"code": "00010203040506070808080808080A09090909"
		}
	},
	"binhacks": {
		"ZECL_low_ins_max_replace": {
			"enable": "<option:zecl_lins_case_new_count>",
			"code": "(u8:<option:zecl_lins_case_base_count> + <option:zecl_lins_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_lins_case_base_count> - 1)",
		},
		"ZECL_high_ins_max_replace": {
			"enable": "<option:zecl_hins_case_new_count>",
			"code": "(<option:zecl_hins_case_base_count> + <option:zecl_hins_case_new_count> - 1)",
			"expect": "(<option:zecl_hins_case_base_count> - 1)",
		},
		"ZECL_int_var_max_replace": {
			"enable": "<option:zecl_ivar_jump_new_count>",
			"code": "(u8:<option:zecl_ivar_jump_base_count> + <option:zecl_ivar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_ivar_jump_base_count> - 1)",
		},
		"ZECL_int_ptr_max_replace": {
			"enable": "<option:zecl_iptr_case_new_count>",
			"code": "(u8:<option:zecl_iptr_case_base_count> + <option:zecl_iptr_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_iptr_case_base_count> - 1)",
		},
		"ZECL_float_var_max_replace": {
			"enable": "<option:zecl_fvar_jump_new_count>",
			"code": "(u8:<option:zecl_fvar_jump_base_count> + <option:zecl_fvar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_fvar_jump_base_count> - 1)",
		},
		"ZECL_float_ptr_max_replace": {
			"enable": "<option:zecl_fptr_case_new_count>",
			"code": "(u8:<option:zecl_fptr_case_base_count> + <option:zecl_fptr_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_fptr_case_base_count> - 1)",
		},
	}
}