{
	"options": {
		"RankConfig_DifficultyAddress": { "type": "i32", "val": "0x00000000" },
		"RankConfig_RankDefaultOffset": { "type": "i32", "val": "0x00000000" },
		"RankConfig_RankMinOffset": { "type": "i32", "val": "0x00000000" },
		"RankConfig_RankMaxOffset": { "type": "i32", "val": "0x00000000" },
		
		"RankConfig_Easy_RankDefault": { "type": "i32", "val": 0 },
		"RankConfig_Easy_RankMin": { "type": "i32", "val": 0 },
		"RankConfig_Easy_RankMax": { "type": "i32", "val": 0 },
		"RankConfig_Easy_SubRankDefault": { "type": "i32", "val": 0 },
		"RankConfig_Normal_RankDefault": { "type": "i32", "val": 0 },
		"RankConfig_Normal_RankMin": { "type": "i32", "val": 0 },
		"RankConfig_Normal_RankMax": { "type": "i32", "val": 0 },
		"RankConfig_Normal_SubRankDefault": { "type": "i32", "val": 0 },
		"RankConfig_Hard_RankDefault": { "type": "i32", "val": 0 },
		"RankConfig_Hard_RankMin": { "type": "i32", "val": 0 },
		"RankConfig_Hard_RankMax": { "type": "i32", "val": 0 },
		"RankConfig_Hard_SubRankDefault": { "type": "i32", "val": 0 },
		"RankConfig_Lunatic_RankDefault": { "type": "i32", "val": 0 },
		"RankConfig_Lunatic_RankMin": { "type": "i32", "val": 0 },
		"RankConfig_Lunatic_RankMax": { "type": "i32", "val": 0 },
		"RankConfig_Lunatic_SubRankDefault": { "type": "i32", "val": 0 },
		"RankConfig_Extra_RankDefault": { "type": "i32", "val": 0 },
		"RankConfig_Extra_RankMin": { "type": "i32", "val": 0 },
		"RankConfig_Extra_RankMax": { "type": "i32", "val": 0 },
		"RankConfig_Extra_SubRankDefault": { "type": "i32", "val": 0 },
		"RankConfig_Phantasm_RankDefault": { "type": "i32", "val": 0 },
		"RankConfig_Phantasm_RankMin": { "type": "i32", "val": 0 },
		"RankConfig_Phantasm_RankMax": { "type": "i32", "val": 0 },
		"RankConfig_Phantasm_SubRankDefault": { "type": "i32", "val": 0 },
		"RankConfig_6_RankDefault": { "type": "i32", "val": 0 },
		"RankConfig_6_RankMin": { "type": "i32", "val": 0 },
		"RankConfig_6_RankMax": { "type": "i32", "val": 0 },
		"RankConfig_6_SubRankDefault": { "type": "i32", "val": 0 },
		"RankConfig_7_RankDefault": { "type": "i32", "val": 0 },
		"RankConfig_7_RankMin": { "type": "i32", "val": 0 },
		"RankConfig_7_RankMax": { "type": "i32", "val": 0 },
		"RankConfig_7_SubRankDefault": { "type": "i32", "val": 0 }
	},
	"codecaves": {
		"RankConfig_RankValues": "00000000 // 00000000 // 00000000 // 00000000",
		"RankConfig_RankSIMDTable": "<option:RankConfig_Easy_RankDefault> // <option:RankConfig_Easy_RankMax> // <option:RankConfig_Easy_RankMin> // <option:RankConfig_Easy_SubRankDefault> // <option:RankConfig_Normal_RankDefault> // <option:RankConfig_Normal_RankMax> // <option:RankConfig_Normal_RankMin> // <option:RankConfig_Normal_SubRankDefault> // <option:RankConfig_Hard_RankDefault> // <option:RankConfig_Hard_RankMax> // <option:RankConfig_Hard_RankMin> // <option:RankConfig_Hard_SubRankDefault> // <option:RankConfig_Lunatic_RankDefault> // <option:RankConfig_Lunatic_RankMax> // <option:RankConfig_Lunatic_RankMin> // <option:RankConfig_Lunatic_SubRankDefault> // <option:RankConfig_Extra_RankDefault> // <option:RankConfig_Extra_RankMax> // <option:RankConfig_Extra_RankMin> // <option:RankConfig_Extra_SubRankDefault> // <option:RankConfig_Phantasm_RankDefault> // <option:RankConfig_Phantasm_RankMax> // <option:RankConfig_Phantasm_RankMin> // <option:RankConfig_Phantasm_SubRankDefault> // <option:RankConfig_6_RankDefault> // <option:RankConfig_6_RankMax> // <option:RankConfig_6_RankMin> // <option:RankConfig_6_SubRankDefault> // <option:RankConfig_7_RankDefault> // <option:RankConfig_7_RankMax> // <option:RankConfig_7_RankMin> // <option:RankConfig_7_SubRankDefault>",
		
		"RankConfig_InitializeByDifficulty": "A1 <option:RankConfig_DifficultyAddress> // C1E0 04 // 0F1080 <codecave:RankConfig_RankSIMDTable> // 0F2905 <codecave:RankConfig_RankValues> // C3",
		"RankConfig_ModifyRank_stdcall": "8B0D <codecave:RankConfig_RankValues+0xC> // 034C24 04 // 78 14 // 83F9 63 // 77 3F // 890D <codecave:RankConfig_RankValues+0xC> // C2 0400 // CCCCCCCCCCCC // BA 1F85EB51 // 89C8 // F7E2 // C1EA 05 // 6BC2 64 // 29C8 // A3 <codecave:RankConfig_RankValues+0xC> // A1 <codecave:RankConfig_RankValues> // 29D0 // 8B0D <codecave:RankConfig_RankValues+0x8> // 39C8 // 0F4CC1 // A3 <codecave:RankConfig_RankValues+0x0> // C2 0400 // BA 1F85EB51 // 89C8 // F7E2 // C1EA 05 // 6BC2 64 // 29C1 // 890D <codecave:RankConfig_RankValues+0xC> // 0315 <codecave:RankConfig_RankValues> // A1 <codecave:RankConfig_RankValues+0x4> // 39C2 // 0F47D0 // 8915 <codecave:RankConfig_RankValues> // C2 0400",
		"RankConfig_ModifyRank_fastcall": "030D <codecave:RankConfig_RankValues+0xC> // 78 48 // 83F9 63 // 77 13 // 890D <codecave:RankConfig_RankValues+0xC> // C3 // CCCCCCCCCCCCCCCCCCCCCCCC // BA 1F85EB51 // 89C8 // F7E2 // C1EA 05 // 6BC2 64 // 29C1 // 890D <codecave:RankConfig_RankValues+0xC> // 0315 <codecave:RankConfig_RankValues> // A1 <codecave:RankConfig_RankValues+0x4> // 39C2 // 0F47D0 // 8915 <codecave:RankConfig_RankValues> // C3 // CCCC // BA 1F85EB51 // 89C8 // F7E2 // C1EA 05 // 6BC2 64 // 29C8 // A3 <codecave:RankConfig_RankValues+0xC> // A1 <codecave:RankConfig_RankValues> // 29D0 // 8B0D <codecave:RankConfig_RankValues+0x8> // 39C8 // 0F4CC1 // A3 <codecave:RankConfig_RankValues> // C3",
		
		"RankConfig_NewRankFunc": "55 // A1 <option:RankConfig_DifficultyAddress> // 8B2C85 <codecave:RankConfig_RankDefaultTable> // 89A9 <option:RankConfig_RankDefaultOffset> // 8B2C85 <codecave:RankConfig_RankMinTable> // 89A9 <option:RankConfig_RankMinOffset> // 8B2C85 <codecave:RankConfig_RankMaxTable> // 89A9 <option:RankConfig_RankMaxOffset> // 5D // C3 // CC // CC",
		"RankConfig_Present": "08010300",
		"RankConfig_RankDefaultTable": "<option:RankConfig_Easy_RankDefault><option:RankConfig_Normal_RankDefault><option:RankConfig_Hard_RankDefault><option:RankConfig_Lunatic_RankDefault><option:RankConfig_Extra_RankDefault><option:RankConfig_Phantasm_RankDefault><option:RankConfig_6_RankDefault><option:RankConfig_7_RankDefault>",
		"RankConfig_RankMinTable": "<option:RankConfig_Easy_RankMin><option:RankConfig_Normal_RankMin><option:RankConfig_Hard_RankMin><option:RankConfig_Lunatic_RankMin><option:RankConfig_Extra_RankMin><option:RankConfig_Phantasm_RankMin><option:RankConfig_6_RankMin><option:RankConfig_7_RankMin>",
		"RankConfig_RankMaxTable": "<option:RankConfig_Easy_RankMax><option:RankConfig_Normal_RankMax><option:RankConfig_Hard_RankMax><option:RankConfig_Lunatic_RankMax><option:RankConfig_Extra_RankMax><option:RankConfig_Phantasm_RankMax><option:RankConfig_6_RankMax><option:RankConfig_7_RankMax>"
	},
	"binhacks": {
		"code": ""
	}
}