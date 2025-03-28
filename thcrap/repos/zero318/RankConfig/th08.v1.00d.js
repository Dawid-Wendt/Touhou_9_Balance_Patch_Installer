{
	"options": {
		"RankConfig_DifficultyAddress": { "type": "i32", "val": "0x0160F538" },
		"RankConfig_RankDefaultOffset": { "type": "i32", "val": "0x0003DE2C" },
		"RankConfig_RankMinOffset": { "type": "i32", "val": "0x0003DE34" },
		"RankConfig_RankMaxOffset": { "type": "i32", "val": "0x0003DE30" },
		
		"RankConfig_Easy_RankDefault": { "type": "i32", "val": 10 },
		"RankConfig_Easy_RankMin": { "type": "i32", "val": 8 },
		"RankConfig_Easy_RankMax": { "type": "i32", "val": 16 },
		"RankConfig_Normal_RankDefault": { "type": "i32", "val": 10 },
		"RankConfig_Normal_RankMin": { "type": "i32", "val": 8 },
		"RankConfig_Normal_RankMax": { "type": "i32", "val": 16 },
		"RankConfig_Hard_RankDefault": { "type": "i32", "val": 8 },
		"RankConfig_Hard_RankMin": { "type": "i32", "val": 8 },
		"RankConfig_Hard_RankMax": { "type": "i32", "val": 12 },
		"RankConfig_Lunatic_RankDefault": { "type": "i32", "val": 8 },
		"RankConfig_Lunatic_RankMin": { "type": "i32", "val": 8 },
		"RankConfig_Lunatic_RankMax": { "type": "i32", "val": 12 },
		"RankConfig_Extra_RankDefault": { "type": "i32", "val": 16 },
		"RankConfig_Extra_RankMin": { "type": "i32", "val": 15 },
		"RankConfig_Extra_RankMax": { "type": "i32", "val": 16 },
		"RankConfig_Phantasm_RankDefault": { "type": "i32", "val": 16 },
		"RankConfig_Phantasm_RankMin": { "type": "i32", "val": 15 },
		"RankConfig_Phantasm_RankMax": { "type": "i32", "val": 16 }
	},
	"binhacks": {
		"RankConfig_TH8_CallNewFunc_1": {
			"addr": "0x43AFAD",
			"code": "[codecave:RankConfig_NewRankFunc]",
			"expected": "85090000"
		},
		"RankConfig_TH8_CallNewFunc_2": {
			"addr": "0x43B39B",
			"code": "[codecave:RankConfig_NewRankFunc]",
			"expected": "97050000"
		},
		"RankConfig_Survive": {
			"ignore": true
		},
		"RankConfig_IncreaseSurvive": {
			"ignore": true
		},
		"RankConfig_DecreaseSurvive": {
			"ignore": true
		},
		"RankConfig_ShootEnemy": {
			"addr": "0x42C40E",
			"expected": "6A 64 // B9 08F56001 // E8 A9FB0000"
		},
		"RankConfig_IncreaseShootEnemy": {
			"addr": "0x42C40E",
		},
		"RankConfig_DecreaseShootEnemy": {
			"addr": "0x42C40E",
		},
		
		"RankConfig_IncreaseRankGetLifeFromExtend": {
			"addr": "0x439B5B",
			"expected": "68 C8000000 // 8B4D FC // E8 5B240000"
		},
		"RankConfig_IncreaseRankGetBombFromExtend": {
			"addr": "0x439BA8",
			"expected": "68 C8000000 // 8B4D FC // E8 0E240000"
		},
		"RankConfig_IncreaseRankGetBombItem": {
			"addr": "0x440ACB",
			"expected": "6A 05 // B9 08F56001 // E8 ECB4FFFF"
		},
		"RankConfig_IncreaseRankGetPowerItem": {
			"addr": "0x440E2E",
			"expected": "6A 01 // B9 08F56001 // E8 89B1FFFF"
		},
		"RankConfig_IncreaseRankGetPointItem": {
			"addr": "0x440FAB",
			"expected": "6A 03 // B9 08F56001 // E8 0CB0FFFF"
		},
		"RankConfig_IncreaseRankGetPointItemHighHuman": {
			"addr": "0x440F9D",
			"expected": "6A 0A // B9 08F56001 // E8 1AB0FFFF"
		},
		"RankConfig_IncreaseRankGraze": {
			"addr": "0x44AA0D",
			"expected": "6A 06 // B9 08F56001 // E8 AA15FFFF"
		},
		"RankConfig_DecreaseRankItemOffBottom": {
			"addr": "0x440985",
			"expected": "6A 03 // B9 08F56001 // E8 AEB6FFFF"
		},
		"RankConfig_DecreaseRankUseBomb": {
			"addr": "0x44CB31",
			"expected": "68 C8000000 // B9 08F56001 // E8 FFF4FEFF"
		},
		"RankConfig_DecreaseRankDie": {
			"addr": "0x44CF48",
			"expected": "68 40060000 // B9 08F56001 // E8 E8F0FEFF"
		}
	}
}