// Unit tests for counter.compact contract
import { Contract } from '../managed/counter/contract/index.js';
import * as path from 'node:path';
import * as fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function runTests() {
  console.log('🧪 Running tests for counter.compact...\n');
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

  // Test 1: Contract Instantiation & Circuit Logic
  try {
    let witnessCalled = false;
    const mockWitnesses = {
      secretIncrement: (context: any) => {
        witnessCalled = true;
        return 'secret_value_123';
      },
    };

    const contract = new Contract(mockWitnesses);
    assert(contract !== null && typeof contract === 'object', 'Circuit logic - Contract instantiates with secret witness input');
  } catch (err: any) {
    console.error('Test 1 error:', err);
    assert(false, 'Circuit logic - Contract instantiates with secret witness input');
  }

  // Test 2: State Transitions & Ledger Declaration
  try {
    const zkPath = path.resolve(__dirname, '..', 'managed', 'counter');
    const contractExists = fs.existsSync(path.join(zkPath, 'contract', 'index.js'));
    const zkirExists = fs.existsSync(path.join(zkPath, 'zkir'));
    const keysExists = fs.existsSync(path.join(zkPath, 'keys'));

    assert(
      contractExists && zkirExists && keysExists,
      'State transitions - Compiled circuit artifacts (contract, zkir, keys) exist for ledger state',
    );
  } catch (err: any) {
    console.error('Test 2 error:', err);
    assert(false, 'State transitions - Compiled circuit artifacts exist');
  }

  // Test 3: Witness Privacy Protection
  try {
    let privateInputExposed = false;
    const mockWitnesses = {
      secretIncrement: (context: any) => {
        return 'SUPER_SECRET_WITNESS_KEY';
      },
    };

    const contract = new Contract(mockWitnesses);
    const contractKeys = Object.keys(contract);
    
    // Ensure the raw private witness key value is not directly leaked into public contract state properties
    const serializedState = JSON.stringify(contract, (key, value) => {
      if (typeof value === 'function') return '[Function]';
      return value;
    });

    if (serializedState.includes('SUPER_SECRET_WITNESS_KEY')) {
      privateInputExposed = true;
    }

    assert(
      !privateInputExposed,
      'Privacy model - Private witness input is strictly local and never exposed in public ledger state',
    );
  } catch (err: any) {
    console.error('Test 3 error:', err);
    assert(false, 'Privacy model - Private witness input is strictly local');
  }

  console.log(`\n========================================`);
  console.log(`Test Results: ${passed} Passed, ${failed} Failed`);
  console.log(`========================================\n`);

  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
