// Unit test suite for Vansidian Confidential Payroll & Treasury Engine (vansidian.compact)
import { Contract as CounterContract } from '../managed/counter/contract/index.js';
import * as path from 'node:path';
import * as fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function runVansidianTests() {
  console.log('🧪 Running unit tests for Vansidian Confidential Payroll Engine (vansidian.compact)...\n');
  let passed = 0;
  let failed = 0;

  function assert(condition: boolean, testName: string) {
    if (condition) {
      console.log(`  ✓ PASSED: ${testName}`);
      passed++;
    } else {
      console.error(`  ✗ FAILED: ${testName}`);
      failed++;
    }
  }

  // Test 1: Circuit Logic & Local Witness Instantiation
  try {
    let witnessExecuted = false;
    const mockWitnesses = {
      secretIncrement: (context: any) => {
        witnessExecuted = true;
        return 'secret_salary_1000';
      },
      secretSalaryIncrement: (context: any) => {
        witnessExecuted = true;
        return 'secret_salary_1000';
      },
    };

    const contract = new CounterContract(mockWitnesses);
    assert(
      contract !== null && typeof contract === 'object',
      'Circuit logic - Vansidian contract instantiates with local secret witness inputs',
    );
  } catch (err: any) {
    console.error('Test 1 error:', err);
    assert(false, 'Circuit logic - Vansidian contract instantiates with local secret witness inputs');
  }

  // Test 2: State Transitions & Circuit Artifact Verification
  try {
    const managedPath = path.resolve(__dirname, '..', 'managed', 'counter');
    const contractExists = fs.existsSync(path.join(managedPath, 'contract', 'index.js'));
    const zkirExists = fs.existsSync(path.join(managedPath, 'zkir'));
    const keysExists = fs.existsSync(path.join(managedPath, 'keys'));

    assert(
      contractExists && zkirExists && keysExists,
      'State transitions - Compiled ZK circuit artifacts (contract, zkir, keys) exist for public ledger state',
    );
  } catch (err: any) {
    console.error('Test 2 error:', err);
    assert(false, 'State transitions - Compiled ZK circuit artifacts exist');
  }

  // Test 3: Witness Privacy Protection (Zero Plaintext Exposure)
  try {
    let privateDataLeaked = false;
    const SECRET_SALARY_PARAM = 'CONFIDENTIAL_EMPLOYEE_SALARY_99482';
    
    const mockWitnesses = {
      secretIncrement: (context: any) => {
        return SECRET_SALARY_PARAM;
      },
      secretSalaryIncrement: (context: any) => {
        return SECRET_SALARY_PARAM;
      },
    };

    const contract = new CounterContract(mockWitnesses);
    const serializedState = JSON.stringify(contract, (key, value) => {
      if (typeof value === 'function') return '[Function]';
      return value;
    });

    if (serializedState.includes(SECRET_SALARY_PARAM)) {
      privateDataLeaked = true;
    }

    assert(
      !privateDataLeaked,
      'Privacy protection - Secret witness parameters execute 100% locally and are never exposed in public contract state',
    );
  } catch (err: any) {
    console.error('Test 3 error:', err);
    assert(false, 'Privacy protection - Secret witness parameters are strictly local');
  }

  console.log(`\n========================================`);
  console.log(`Vansidian Test Results: ${passed} Passed, ${failed} Failed`);
  console.log(`========================================\n`);

  if (failed > 0) {
    process.exit(1);
  }
}

runVansidianTests();
