{
	"options": {
		"RankConfig_DifficultyAddress": { "type": "i32", "val": "0x00626280" },
		"RankConfig_RankDefaultOffset": { "type": "i32", "val": "0x00009634" },
		"RankConfig_RankMinOffset": { "type": "i32", "val": "0x0000963C" },
		"RankConfig_RankMaxOffset": { "type": "i32", "val": "0x00009638" },
		
		"RankConfig_Easy_RankDefault": { "type": "i32", "val": 16 },
		"RankConfig_Easy_RankMin": { "type": "i32", "val": 12 },
		"RankConfig_Easy_RankMax": { "type": "i32", "val": 20 },
		"RankConfig_Normal_RankDefault": { "type": "i32", "val": 16 },
		"RankConfig_Normal_RankMin": { "type": "i32", "val": 10 },
		"RankConfig_Normal_RankMax": { "type": "i32", "val": 32 },
		"RankConfig_Hard_RankDefault": { "type": "i32", "val": 16 },
		"RankConfig_Hard_RankMin": { "type": "i32", "val": 10 },
		"RankConfig_Hard_RankMax": { "type": "i32", "val": 32 },
		"RankConfig_Lunatic_RankDefault": { "type": "i32", "val": 16 },
		"RankConfig_Lunatic_RankMin": { "type": "i32", "val": 10 },
		"RankConfig_Lunatic_RankMax": { "type": "i32", "val": 32 },
		"RankConfig_Extra_RankDefault": { "type": "i32", "val": 16 },
		"RankConfig_Extra_RankMin": { "type": "i32", "val": 10 },
		"RankConfig_Extra_RankMax": { "type": "i32", "val": 32 },
		"RankConfig_Phantasm_RankDefault": { "type": "i32", "val": 16 },
		"RankConfig_Phantasm_RankMin": { "type": "i32", "val": 10 },
		"RankConfig_Phantasm_RankMax": { "type": "i32", "val": 32 }
	},
	"binhacks": {
		"RankConfig_TH7_CallNewFunc_1": {
			"addr": "0x42EAFC",
			"code": "[codecave:RankConfig_NewRankFunc]",
			"expected": "8CF8FFFF"
		},
		"RankConfig_TH7_CallNewFunc_2": {
			"addr": "0x42F06D",
			"code": "[codecave:RankConfig_NewRankFunc]",
			"expected": "1BF3FFFF"
		}
	}
}